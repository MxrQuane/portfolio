export const steps = [
    { title: 'Who Are You', subtitle: 'Tell me about yourself' },
    { title: 'What Do You Need?', subtitle: 'Tell me about your project' },
    { title: 'Scope & Logistics', subtitle: 'Tell me about your project' },
];

// Each input's `name` matches the key inside its form section.
// value and onChange are bound in the component.
export const stepInputs = [
    // Step 0 — Who Are You
    [
        { label: 'Your Name',    type: 'text',  name: 'name',    required: true,  placeholder: 'Marouane Haine'},
        { label: 'Your Company', type: 'text',  name: 'company', required: false, placeholder: 'Acme Inc.'},
        { label: 'Your Email',   type: 'email', name: 'email',   required: true,  placeholder: 'marouane.haine@example.com'},
    ],
    // Step 1 — What Do You Need?
    [
        { label: 'Project Type',  type: 'text',     name: 'projectType',  required: true,  placeholder: 'e.g. Web App, Landing Page, Desktop App' },
        { label: 'Description',   type: 'textarea', name: 'description',  required: true,  placeholder: 'Tell me about the project...' },
    ],
    // Step 2 — Scope & Logistics
    [
        { label: 'Budget',           type: 'text',     name: 'budget',          required: false, placeholder: 'e.g. $1,000 - $5,000' },
        { label: 'Timeline',         type: 'text',     name: 'timeline',        required: false, placeholder: 'e.g. 4 weeks, 3 months' },
        { label: 'Existing Design?', type: 'checkbox', name: 'designExisting',  required: false, placeholder: '' },
    ],
];

// Required field names per step — used to gate the Next button.
export const stepRequiredFields = [
    ['name', 'email'],        // step 0
    ['projectType', 'description'], // step 1
    [],                       // step 2 — no required fields
];
