/* =========================================
   CONCEPTLENS AI
   COMPLETE JAVASCRIPT
   ========================================= */


/* =========================================
   LOGIN
   ========================================= */

const loginForm =
    document.getElementById("loginForm");

const passwordInput =
    document.getElementById("password");

const togglePassword =
    document.getElementById("togglePassword");


if (togglePassword && passwordInput) {

    togglePassword.addEventListener(
        "click",
        function () {

            if (passwordInput.type === "password") {

                passwordInput.type = "text";

                togglePassword.textContent = "🙈";

            } else {

                passwordInput.type = "password";

                togglePassword.textContent = "👁";

            }

        }
    );

}


if (loginForm) {

    loginForm.addEventListener(
        "submit",
        function (event) {

            event.preventDefault();

            const studentId =
                document
                    .getElementById("studentId")
                    .value
                    .trim();

            const password =
                document
                    .getElementById("password")
                    .value;

            const message =
                document
                    .getElementById("loginMessage");


            if (studentId.length < 3) {

                message.textContent =
                    "Please enter a valid Student ID or email.";

                message.style.color =
                    "#A45D5D";

                return;

            }


            if (password.length < 6) {

                message.textContent =
                    "Password must contain at least 6 characters.";

                message.style.color =
                    "#A45D5D";

                return;

            }


            localStorage.setItem(
                "conceptLensStudent",
                studentId
            );


            message.textContent =
                "Login successful!";

            message.style.color =
                "#64835A";


            setTimeout(
                function () {

                    window.location.href =
                        "dashboard.html";

                },
                600
            );

        }
    );

}


/* =========================================
   FORGOT PASSWORD
   ========================================= */

function showForgotPassword(event) {

    event.preventDefault();

    alert(
        "Password recovery will be connected to secure authentication in the production version."
    );

}


/* =========================================
   LEARNING DATA
   ========================================= */

const learningData = {

    "CSE": {

        "Data Structures & Algorithms": [

            ["Arrays", "Searching and manipulating data"],

            ["Strings", "Working with textual data"],

            ["Linked Lists", "Nodes and dynamic structures"],

            ["Stacks & Queues", "LIFO and FIFO structures"],

            ["Trees", "Hierarchical data structures"],

            ["Graphs", "Networks and relationships"],

            ["Sorting", "Merge Sort and Quick Sort"],

            ["Searching", "Binary Search and more"],

            ["Recursion", "Solving smaller subproblems"],

            ["Dynamic Programming", "Optimization through subproblems"]

        ],


        "Object-Oriented Programming": [

            ["Classes & Objects", "Building blocks of OOP"],

            ["Inheritance", "Reusing existing classes"],

            ["Polymorphism", "Multiple forms of behavior"],

            ["Encapsulation", "Organizing and protecting data"],

            ["Abstraction", "Hiding implementation details"]

        ],


        "Database Management Systems": [

            ["SQL", "Querying and managing data"],

            ["Normalization", "Reducing database redundancy"],

            ["ER Model", "Designing database relationships"],

            ["Keys", "Identifying records"],

            ["Transactions", "Reliable database operations"]

        ],


        "Operating Systems": [

            ["Processes", "Programs in execution"],

            ["Threads", "Units of execution"],

            ["CPU Scheduling", "Managing processor time"],

            ["Deadlocks", "Handling resource conflicts"],

            ["Memory Management", "Managing computer memory"]

        ],


        "Computer Networks": [

            ["OSI Model", "Understanding network layers"],

            ["TCP/IP", "Internet communication architecture"],

            ["IP Addressing", "Identifying devices"],

            ["Routing", "Finding network paths"],

            ["HTTP & HTTPS", "Web communication"]

        ],


        "Computer Organization": [

            ["CPU", "Processor organization"],

            ["Memory", "Cache, registers and RAM"],

            ["Instruction Cycle", "Fetch, decode and execute"],

            ["I/O Systems", "Communication with devices"]

        ]

    },


    "CSE AI": {

        "Data Structures & Algorithms": [

            ["Arrays", "Working with collections"],

            ["Linked Lists", "Dynamic data structures"],

            ["Stacks & Queues", "Linear structures"],

            ["Trees", "Hierarchical structures"],

            ["Graphs", "Networks and relationships"],

            ["Sorting", "Efficient sorting algorithms"],

            ["Searching", "Finding information efficiently"],

            ["Recursion", "Recursive problem solving"],

            ["Dynamic Programming", "Optimization techniques"]

        ],


        "Artificial Intelligence": [

            ["AI Fundamentals", "Core ideas behind AI"],

            ["Search Algorithms", "Finding solutions"],

            ["Knowledge Representation", "Representing information"],

            ["Reasoning", "Making decisions"],

            ["Intelligent Agents", "Systems that perceive and act"]

        ],


        "Machine Learning": [

            ["Supervised Learning", "Learning from labeled data"],

            ["Unsupervised Learning", "Finding hidden patterns"],

            ["Regression", "Predicting numerical values"],

            ["Classification", "Predicting categories"],

            ["Overfitting", "Understanding generalization"],

            ["Model Evaluation", "Measuring model performance"]

        ],


        "Database Management Systems": [

            ["SQL", "Working with structured data"],

            ["Normalization", "Organizing database structures"],

            ["Keys", "Identifying database records"],

            ["Transactions", "Reliable database operations"]

        ],


        "Computer Networks": [

            ["OSI Model", "Understanding network layers"],

            ["TCP/IP", "Internet communication"],

            ["IP Addressing", "Identifying network devices"],

            ["HTTP & HTTPS", "Web communication"]

        ]

    },


    "IT": {

        "Data Structures & Algorithms": [

            ["Arrays", "Collection manipulation"],

            ["Strings", "Text processing"],

            ["Linked Lists", "Dynamic collections"],

            ["Stacks & Queues", "Linear data structures"],

            ["Trees", "Hierarchical structures"],

            ["Graphs", "Networks and relationships"],

            ["Sorting", "Organizing data efficiently"],

            ["Searching", "Finding data efficiently"]

        ],


        "Database Management Systems": [

            ["SQL", "Database queries"],

            ["Normalization", "Reducing redundancy"],

            ["ER Model", "Database design"],

            ["Transactions", "Reliable operations"],

            ["Keys", "Database identification"]

        ],


        "Object-Oriented Programming": [

            ["Classes & Objects", "Reusable software structures"],

            ["Inheritance", "Extending existing classes"],

            ["Polymorphism", "Multiple behaviors"],

            ["Encapsulation", "Protecting data"],

            ["Abstraction", "Simplifying complexity"]

        ],


        "Operating Systems": [

            ["Processes", "Programs in execution"],

            ["Threads", "Units of execution"],

            ["CPU Scheduling", "Managing processor time"],

            ["Deadlocks", "Resource conflicts"],

            ["Memory Management", "Managing memory"]

        ],


        "Web Technologies": [

            ["HTML", "Web page structure"],

            ["CSS", "Web page design"],

            ["JavaScript", "Web interaction"],

            ["APIs", "Connecting applications"],

            ["Web Security", "Protecting web applications"]

        ]

    },


    "ECE": {

        "Digital Electronics": [

            ["Logic Gates", "Building blocks of digital circuits"],

            ["Boolean Algebra", "Mathematical logic"],

            ["Combinational Circuits", "Circuits without memory"],

            ["Sequential Circuits", "Circuits with memory"],

            ["Flip-Flops", "Basic memory elements"]

        ],


        "Analog Electronics": [

            ["Diodes", "Semiconductor devices"],

            ["Transistors", "Switching and amplification"],

            ["Amplifiers", "Increasing signal strength"],

            ["Operational Amplifiers", "Analog building blocks"],

            ["Oscillators", "Generating periodic signals"]

        ],


        "Signals & Systems": [

            ["Continuous Signals", "Continuous-time signals"],

            ["Discrete Signals", "Sampled signals"],

            ["Fourier Transform", "Frequency analysis"],

            ["Convolution", "Combining signals"],

            ["Sampling", "Converting signals to discrete form"]

        ],


        "Communication Systems": [

            ["Modulation", "Preparing signals for transmission"],

            ["AM & FM", "Amplitude and frequency modulation"],

            ["Noise", "Signal interference"],

            ["Bandwidth", "Communication capacity"],

            ["Digital Communication", "Sending digital information"]

        ],


        "Microprocessors & Microcontrollers": [

            ["8086 Architecture", "Processor organization"],

            ["Instruction Set", "Processor commands"],

            ["Memory Interfacing", "Connecting memory"],

            ["Microcontrollers", "Small computing systems"],

            ["Embedded Systems", "Computing inside devices"]

        ]

    }

};


/* =========================================
   DASHBOARD
   ========================================= */

let selectedBranch = null;

let selectedSubject = null;

let selectedConcept = null;


const subjectSection =
    document.getElementById("subjectSection");

const conceptSection =
    document.getElementById("conceptSection");

const learningSection =
    document.getElementById("learningSection");

const subjectGrid =
    document.getElementById("subjectGrid");

const conceptGrid =
    document.getElementById("conceptGrid");

const subjectDescription =
    document.getElementById("subjectDescription");

const conceptDescription =
    document.getElementById("conceptDescription");

const learningTitle =
    document.getElementById("learningTitle");

const learningDescription =
    document.getElementById("learningDescription");


/* =========================================
   BRANCH
   ========================================= */

function selectBranch(branch, button) {

    selectedBranch = branch;

    selectedSubject = null;

    selectedConcept = null;


    document
        .querySelectorAll(".branch-card")
        .forEach(function (card) {

            card.classList.remove("selected");

        });


    button.classList.add("selected");


    subjectSection.classList.remove(
        "hidden-section"
    );


    subjectDescription.textContent =
        `Popular subjects for ${branch} students.`;


    loadSubjects(branch);


    conceptSection.classList.add(
        "hidden-section"
    );

    learningSection.classList.add(
        "hidden-section"
    );


    setTimeout(function () {

        subjectSection.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

    }, 100);

}


/* =========================================
   SUBJECTS
   ========================================= */

function loadSubjects(branch) {

    subjectGrid.innerHTML = "";


    const subjects =
        Object.keys(
            learningData[branch]
        );


    subjects.forEach(function (subject) {

        const card =
            document.createElement("button");


        card.className =
            "subject-card";


        card.innerHTML = `

            <div class="subject-icon">
                ${getSubjectIcon(subject)}
            </div>

            <h3>
                ${subject}
            </h3>

            <p>
                Explore important concepts →
            </p>

        `;


        card.addEventListener(
            "click",
            function () {

                selectSubject(
                    subject,
                    card
                );

            }
        );


        subjectGrid.appendChild(card);

    });

}


/* =========================================
   SUBJECT ICON
   ========================================= */

function getSubjectIcon(subject) {

    const icons = {

        "Data Structures & Algorithms": "🧩",

        "Object-Oriented Programming": "🧱",

        "Database Management Systems": "🗄️",

        "Operating Systems": "⚙️",

        "Computer Networks": "🌐",

        "Computer Organization": "💻",

        "Artificial Intelligence": "🤖",

        "Machine Learning": "🧠",

        "Web Technologies": "🌐",

        "Digital Electronics": "🔌",

        "Analog Electronics": "📟",

        "Signals & Systems": "〰️",

        "Communication Systems": "📡",

        "Microprocessors & Microcontrollers": "🔧"

    };


    return icons[subject] || "📚";

}


/* =========================================
   SUBJECT
   ========================================= */

function selectSubject(subject, card) {

    selectedSubject = subject;

    selectedConcept = null;


    document
        .querySelectorAll(".subject-card")
        .forEach(function (item) {

            item.classList.remove("selected");

        });


    card.classList.add("selected");


    conceptSection.classList.remove(
        "hidden-section"
    );


    conceptDescription.textContent =
        `Important concepts from ${subject}.`;


    loadConcepts(
        selectedBranch,
        selectedSubject
    );


    learningSection.classList.add(
        "hidden-section"
    );


    setTimeout(function () {

        conceptSection.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

    }, 100);

}


/* =========================================
   CONCEPTS
   ========================================= */

function loadConcepts(
    branch,
    subject
) {

    conceptGrid.innerHTML = "";


    const concepts =
        learningData[branch][subject];


    concepts.forEach(function (concept) {

        const card =
            document.createElement("button");


        card.className =
            "concept-card";


        card.innerHTML = `

            <h3>
                ${concept[0]}
            </h3>

            <p>
                ${concept[1]}
            </p>

        `;


        card.addEventListener(
            "click",
            function () {

                selectConcept(
                    concept[0],
                    concept[1],
                    card
                );

            }
        );


        conceptGrid.appendChild(card);

    });

}


/* =========================================
   CONCEPT
   ========================================= */

function selectConcept(
    concept,
    description,
    card
) {

    selectedConcept = concept;


    document
        .querySelectorAll(".concept-card")
        .forEach(function (item) {

            item.classList.remove("selected");

        });


    card.classList.add("selected");


    learningSection.classList.remove(
        "hidden-section"
    );


    learningTitle.textContent =
        `Let's explore ${concept}.`;


    learningDescription.textContent =
        `${description}. ConceptLens will help you understand it step by step, practice it, and identify where you may need more support.`;


    localStorage.setItem(
        "conceptLensBranch",
        selectedBranch
    );

    localStorage.setItem(
        "conceptLensSubject",
        selectedSubject
    );

    localStorage.setItem(
        "conceptLensConcept",
        selectedConcept
    );


    setTimeout(function () {

        learningSection.scrollIntoView({
            behavior: "smooth",
            block: "center"
        });

    }, 100);

}


/* =========================================
   START LEARNING
   ========================================= */

function startLearning() {

    if (
        !selectedBranch ||
        !selectedSubject ||
        !selectedConcept
    ) {

        alert(
            "Please choose a branch, subject and concept first."
        );

        return;

    }


    alert(

        `Starting your personalized learning journey:

Branch: ${selectedBranch}

Subject: ${selectedSubject}

Concept: ${selectedConcept}

Your next step will be an interactive explanation followed by personalized practice.`

    );

}