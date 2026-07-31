import React, { createContext, useContext, useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const TransitionContext = createContext(null);

export const usePageTransition = () => useContext(TransitionContext);

export const TransitionProvider = ({ children }) => {
    // states: 'idle' | 'pre-covering' | 'covering' | 'uncovering'
    const [transitionState, setTransitionState] = useState('idle');
    const [pendingNavigate, setPendingNavigate] = useState(null);
    const [fromProject, setFromProject] = useState(false);
    const location = useLocation();

    const startTransition = (navigateCallback, isFromProject = false) => {
        setFromProject(isFromProject);
        setPendingNavigate(() => navigateCallback);
        if (isFromProject) {
            // Snap to sidebar size first (no animation), then animate to full screen on next frame
            setTransitionState('pre-covering');
        } else {
            setTransitionState('covering');
        }
    };

    useEffect(() => {
        if (transitionState === 'pre-covering') {
            // Give browser two frames to render the snapped position, then animate to full cover
            const frame = requestAnimationFrame(() => {
                requestAnimationFrame(() => setTransitionState('covering'));
            });
            return () => cancelAnimationFrame(frame);
        } else if (transitionState === 'covering') {
            const timer = setTimeout(() => {
                if (pendingNavigate) {
                    pendingNavigate();
                    setPendingNavigate(null);
                }
                setTransitionState('uncovering');
            }, 900);
            return () => clearTimeout(timer);
        } else if (transitionState === 'uncovering') {
            const timer = setTimeout(() => {
                setTransitionState('idle');
                setFromProject(false);
            }, 700);
            return () => clearTimeout(timer);
        }
    }, [transitionState, pendingNavigate]);

    // From project: origin-right so curtain grows leftward from sidebar position
    // To project:   origin-left so curtain grows rightward from left edge
    const coverOrigin = fromProject ? 'right' : 'left';

    const getTransform = () => {
        if (transitionState === 'pre-covering') return 'scaleX(0.333333)'; // snap to sidebar width
        if (transitionState === 'covering') return 'scaleX(1)';
        if (transitionState === 'uncovering') {
            // Going TO project: stop at sidebar width (0.333) from the right
            // Going FROM project: collapse fully to 0 from the left
            return fromProject ? 'scaleX(0)' : 'scaleX(0.333333)';
        }
        return 'scaleX(0)'; // idle
    };

    const getUncoverOrigin = () => {
        // Going TO project: collapse from left edge → stays on right as sidebar
        // Going FROM project: collapse from right edge → disappears to left
        return fromProject ? 'left' : 'right';
    };

    const curtainStyle = (delay, delayState) => ({
        transform: getTransform(),
        transformOrigin: (transitionState === 'covering' || transitionState === 'pre-covering')
            ? coverOrigin
            : getUncoverOrigin(),
        pointerEvents: transitionState === 'covering' ? 'auto' : 'none',
        transitionDelay: transitionState === delayState ? delay : '0ms',
        // Disable CSS transition during the instantaneous pre-covering snap
        transition: transitionState === 'pre-covering'
            ? 'none'
            : 'transform 0.6s ease-in-out',
        visibility: transitionState === 'idle' ? 'hidden' : 'visible'
    });

    return (
        <TransitionContext.Provider value={{ startTransition, transitionState }}>
            {children}
            {/* First curtain (primary/cyan) */}
            <div
                className="fixed inset-0 bg-primary z-9999"
                style={curtainStyle('100ms', 'uncovering')}
            />
            {/* Second curtain (dark background) */}
            <div
                className="fixed inset-0 bg-background z-9999"
                style={curtainStyle('300ms', 'covering')}
            />
        </TransitionContext.Provider>
    );
};
