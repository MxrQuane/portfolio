export const steps = [
    { title: 'Who Are You', subtitle: "I'd like to know who I'm working with." },
    { title: 'What Do You Need?', subtitle: "Tell me a bit about what you need." },
    { title: 'Scope & Logistics', subtitle: "A few optional details, if you have them." },
    { title: 'Anything Else?', subtitle: "Anything else you'd like to share? (optional)" },
];

// Each input's `name` matches the key inside its form section.
// value and onChange are bound in the component.
export const stepInputs = [
    // Step 0 — Who Are You
    [
        { label: 'Your Name',    type: 'text',  name: 'name',    required: true,  placeholder: 'H.Marouane'},
        { label: 'Your Company', type: 'text',  name: 'company', required: false, placeholder: 'Acme Inc.'},
        { label: 'Your Email',   type: 'email', name: 'email',   required: true,  placeholder: 'merouane.haine@gmail.com'},
        { label: 'Website',      type: 'text',  name: 'website', required: false, placeholder: 'Your website' },
    ],
    // Step 1 — What Do You Need?
    [
        { label: 'Project Type',  type: 'text',     name: 'projectType',  required: true,  placeholder: 'e.g. Web App, Landing Page, Desktop App, AI/ML Integration, Not sure yet' },
        { label: 'Description',   type: 'textarea', name: 'description',  required: true,  placeholder: 'Tell me about the project...' },
    ],
    // Step 2 — Scope & Logistics
    [
        { label: 'Budget',           type: 'text',     name: 'budget',          required: false, placeholder: 'e.g. < $500, $1,000 - $5,000, $700+, Not sure yet' },
        { label: 'Timeline',         type: 'text',     name: 'timeline',        required: false, placeholder: 'e.g. ASAP, 4 weeks, 3 months, Not sure yet' },
        { label: 'Existing Design?', type: 'yesNo',    name: 'designExisting',  required: false, placeholder: '' },
    ],
    // Step 3 — Anything Else?
    [
        { label: 'Anything Else?', type: 'text',     name: 'anythingElse',  required: false, placeholder: 'Tell me anything else you want me to know...' },
    ],
];

// Required field names per step — used to gate the Next button.
export const stepRequiredFields = [
    ['name', 'email'],        // step 0
    ['projectType', 'description'], // step 1
    [],                       // step 2 — no required fields
];

export const initialForm = {
    whoAreYou: {
        name: '',
        company: '',
        email: '',
        website: '', // honeypot field
    },
    whatDoYouNeed: {
        projectType: '',
        description: '',
    },
    scopsAndLogistics: {
        budget: '',
        timeline: '',
        designExisting: false,
    },
    anythingElse: {
        anythingElse: '',
    },
};