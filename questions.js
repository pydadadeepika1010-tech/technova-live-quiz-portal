// ============================================================
// TECHNOVA 2K26 - TECH QUIZ QUESTION BANK
// ============================================================
// ROUND 1 = 275 QUESTIONS - VERY EASY
// ROUND 2 = 200 QUESTIONS - MEDIUM
// ROUND 3 = 100 QUESTIONS - CHALLENGE
//
// ROUND 3 OPTIONS ARE STORED BUT HIDDEN BY app.js
// ============================================================

const quizQuestions = {

    // ========================================================
    // ROUND 1 - 275 VERY EASY QUESTIONS
    // ========================================================

    round1: [

        {
            id: 1,
            question: "What does CPU stand for?",
            options: ["Central Processing Unit", "Computer Processing Unit", "Central Program Unit", "Computer Program Utility"],
            answer: "Central Processing Unit"
        },
        {
            id: 2,
            question: "What does RAM stand for?",
            options: ["Random Access Memory", "Read Access Memory", "Rapid Access Machine", "Random Application Memory"],
            answer: "Random Access Memory"
        },
        {
            id: 3,
            question: "What does ROM stand for?",
            options: ["Read Only Memory", "Random Only Memory", "Read Open Memory", "Run Only Memory"],
            answer: "Read Only Memory"
        },
        {
            id: 4,
            question: "What does USB stand for?",
            options: ["Universal Serial Bus", "Universal System Bus", "United Serial Bus", "Universal Storage Board"],
            answer: "Universal Serial Bus"
        },
        {
            id: 5,
            question: "What does WWW stand for?",
            options: ["World Wide Web", "World Web Window", "Wide World Web", "Web World Wide"],
            answer: "World Wide Web"
        },
        {
            id: 6,
            question: "What does HTML stand for?",
            options: ["HyperText Markup Language", "HighText Machine Language", "HyperText Machine Language", "Hyperlink Text Markup Language"],
            answer: "HyperText Markup Language"
        },
        {
            id: 7,
            question: "What does CSS stand for?",
            options: ["Cascading Style Sheets", "Computer Style Sheets", "Creative Style System", "Colorful Style Sheets"],
            answer: "Cascading Style Sheets"
        },
        {
            id: 8,
            question: "Which device is used to type text?",
            options: ["Keyboard", "Monitor", "Speaker", "Printer"],
            answer: "Keyboard"
        },
        {
            id: 9,
            question: "Which device displays images and text?",
            options: ["Monitor", "Keyboard", "Mouse", "Microphone"],
            answer: "Monitor"
        },
        {
            id: 10,
            question: "Which device is commonly used to move the pointer?",
            options: ["Mouse", "Printer", "Speaker", "Scanner"],
            answer: "Mouse"
        },
        {
            id: 11,
            question: "Which device prints documents on paper?",
            options: ["Printer", "Scanner", "Monitor", "Router"],
            answer: "Printer"
        },
        {
            id: 12,
            question: "Which device is used to scan documents?",
            options: ["Scanner", "Printer", "Keyboard", "Speaker"],
            answer: "Scanner"
        },
        {
            id: 13,
            question: "Which component is often called the brain of a computer?",
            options: ["CPU", "Mouse", "Keyboard", "Monitor"],
            answer: "CPU"
        },
        {
            id: 14,
            question: "How many bits are in one byte?",
            options: ["8", "4", "16", "32"],
            answer: "8"
        },
        {
            id: 15,
            question: "Which number system uses only 0 and 1?",
            options: ["Binary", "Decimal", "Octal", "Hexadecimal"],
            answer: "Binary"
        },
        {
            id: 16,
            question: "What is the binary representation of decimal 2?",
            options: ["10", "11", "01", "100"],
            answer: "10"
        },
        {
            id: 17,
            question: "What is the binary representation of decimal 5?",
            options: ["101", "100", "110", "111"],
            answer: "101"
        },
        {
            id: 18,
            question: "What is the decimal value of binary 10?",
            options: ["2", "1", "3", "4"],
            answer: "2"
        },
        {
            id: 19,
            question: "Which memory is volatile?",
            options: ["RAM", "ROM", "Hard Disk", "SSD"],
            answer: "RAM"
        },
        {
            id: 20,
            question: "Which storage device has no moving mechanical parts?",
            options: ["SSD", "Floppy Disk", "DVD", "Tape Drive"],
            answer: "SSD"
        },

        {
            id: 21,
            question: "Which company developed Windows?",
            options: ["Microsoft", "Apple", "Google", "IBM"],
            answer: "Microsoft"
        },
        {
            id: 22,
            question: "Which company developed Android?",
            options: ["Google", "Microsoft", "Apple", "IBM"],
            answer: "Google"
        },
        {
            id: 23,
            question: "Which company created the iPhone?",
            options: ["Apple", "Microsoft", "Google", "Dell"],
            answer: "Apple"
        },
        {
            id: 24,
            question: "Which operating system is developed by Microsoft?",
            options: ["Windows", "Android", "Linux", "iOS"],
            answer: "Windows"
        },
        {
            id: 25,
            question: "Which operating system is developed by Apple for iPhones?",
            options: ["iOS", "Windows", "Linux", "Ubuntu"],
            answer: "iOS"
        },
        {
            id: 26,
            question: "Which operating system is open source?",
            options: ["Linux", "Windows", "iOS", "MS-DOS"],
            answer: "Linux"
        },
        {
            id: 27,
            question: "Which operating system is commonly used on Android phones?",
            options: ["Android", "Windows", "macOS", "DOS"],
            answer: "Android"
        },
        {
            id: 28,
            question: "What is the default extension of a modern Microsoft Word document?",
            options: [".docx", ".txt", ".jpg", ".exe"],
            answer: ".docx"
        },
        {
            id: 29,
            question: "What is the extension of a JavaScript file?",
            options: [".js", ".java", ".html", ".css"],
            answer: ".js"
        },
        {
            id: 30,
            question: "What is the extension of a CSS file?",
            options: [".css", ".style", ".design", ".cs"],
            answer: ".css"
        },

        {
            id: 31,
            question: "What is the extension of an HTML file?",
            options: [".html", ".htmldoc", ".web", ".page"],
            answer: ".html"
        },
        {
            id: 32,
            question: "Which shortcut is used to copy text?",
            options: ["Ctrl + C", "Ctrl + V", "Ctrl + X", "Ctrl + Z"],
            answer: "Ctrl + C"
        },
        {
            id: 33,
            question: "Which shortcut is used to paste text?",
            options: ["Ctrl + V", "Ctrl + C", "Ctrl + X", "Ctrl + P"],
            answer: "Ctrl + V"
        },
        {
            id: 34,
            question: "Which shortcut is used to cut text?",
            options: ["Ctrl + X", "Ctrl + C", "Ctrl + V", "Ctrl + A"],
            answer: "Ctrl + X"
        },
        {
            id: 35,
            question: "Which shortcut is used to undo an action?",
            options: ["Ctrl + Z", "Ctrl + U", "Ctrl + Y", "Ctrl + D"],
            answer: "Ctrl + Z"
        },
        {
            id: 36,
            question: "Which shortcut selects all text?",
            options: ["Ctrl + A", "Ctrl + S", "Ctrl + T", "Ctrl + E"],
            answer: "Ctrl + A"
        },
        {
            id: 37,
            question: "Which shortcut saves a document?",
            options: ["Ctrl + S", "Ctrl + D", "Ctrl + W", "Ctrl + Q"],
            answer: "Ctrl + S"
        },
        {
            id: 38,
            question: "Which shortcut is commonly used to print?",
            options: ["Ctrl + P", "Ctrl + R", "Ctrl + T", "Ctrl + I"],
            answer: "Ctrl + P"
        },
        {
            id: 39,
            question: "Which shortcut is commonly used to find text?",
            options: ["Ctrl + F", "Ctrl + G", "Ctrl + H", "Ctrl + L"],
            answer: "Ctrl + F"
        },
        {
            id: 40,
            question: "Which key is used to delete characters to the left of the cursor?",
            options: ["Backspace", "Delete", "Shift", "Escape"],
            answer: "Backspace"
        },

        {
            id: 41,
            question: "What is Google Chrome?",
            options: ["Web Browser", "Operating System", "Database", "Programming Language"],
            answer: "Web Browser"
        },
        {
            id: 42,
            question: "What is Microsoft Edge?",
            options: ["Web Browser", "Compiler", "Database", "Antivirus"],
            answer: "Web Browser"
        },
        {
            id: 43,
            question: "What is Firefox?",
            options: ["Web Browser", "Operating System", "Programming Language", "Search Engine"],
            answer: "Web Browser"
        },
        {
            id: 44,
            question: "Which company operates Google Search?",
            options: ["Google", "Apple", "Microsoft", "Amazon"],
            answer: "Google"
        },
        {
            id: 45,
            question: "What is Gmail used for?",
            options: ["Email", "Video Editing", "Programming", "Gaming"],
            answer: "Email"
        },
        {
            id: 46,
            question: "What is YouTube mainly used for?",
            options: ["Video Sharing", "Database Management", "Programming", "File Compression"],
            answer: "Video Sharing"
        },
        {
            id: 47,
            question: "What is Google Drive used for?",
            options: ["Cloud Storage", "Antivirus", "Programming", "Video Editing"],
            answer: "Cloud Storage"
        },
        {
            id: 48,
            question: "What does URL stand for?",
            options: ["Uniform Resource Locator", "Universal Resource Link", "Uniform Reference Link", "Universal Routing Locator"],
            answer: "Uniform Resource Locator"
        },
        {
            id: 49,
            question: "What does HTTP stand for?",
            options: ["HyperText Transfer Protocol", "HighText Transfer Program", "HyperText Transmission Program", "Hyper Transfer Text Protocol"],
            answer: "HyperText Transfer Protocol"
        },
        {
            id: 50,
            question: "What does HTTPS provide compared with HTTP?",
            options: ["Encrypted communication", "More storage", "Faster CPU", "More RAM"],
            answer: "Encrypted communication"
        },

        {
            id: 51,
            question: "Which device connects multiple networks?",
            options: ["Router", "Keyboard", "Monitor", "Printer"],
            answer: "Router"
        },
        {
            id: 52,
            question: "Which device connects devices within a local network?",
            options: ["Switch", "Monitor", "Keyboard", "Scanner"],
            answer: "Switch"
        },
        {
            id: 53,
            question: "What does Wi-Fi provide?",
            options: ["Wireless Network Connection", "Extra RAM", "Power Supply", "Storage"],
            answer: "Wireless Network Connection"
        },
        {
            id: 54,
            question: "What does LAN stand for?",
            options: ["Local Area Network", "Large Area Network", "Local Access Node", "Linked Area Network"],
            answer: "Local Area Network"
        },
        {
            id: 55,
            question: "What does WAN stand for?",
            options: ["Wide Area Network", "Wireless Area Network", "Web Access Network", "World Access Node"],
            answer: "Wide Area Network"
        },
        {
            id: 56,
            question: "What does IP stand for in networking?",
            options: ["Internet Protocol", "Internet Program", "Internal Protocol", "Internet Process"],
            answer: "Internet Protocol"
        },
        {
            id: 57,
            question: "What is an IP address used for?",
            options: ["Identifying a device on a network", "Printing documents", "Editing photos", "Playing music"],
            answer: "Identifying a device on a network"
        },
        {
            id: 58,
            question: "What is Bluetooth used for?",
            options: ["Short-range wireless communication", "Cloud storage", "Web hosting", "Printing only"],
            answer: "Short-range wireless communication"
        },
        {
            id: 59,
            question: "What does DNS stand for?",
            options: ["Domain Name System", "Digital Network Service", "Domain Network Server", "Digital Name System"],
            answer: "Domain Name System"
        },
        {
            id: 60,
            question: "What does ISP stand for?",
            options: ["Internet Service Provider", "Internet Security Program", "Internal Service Protocol", "Internet System Provider"],
            answer: "Internet Service Provider"
        },

        {
            id: 61,
            question: "Which language is used to style web pages?",
            options: ["CSS", "HTML", "SQL", "C"],
            answer: "CSS"
        },
        {
            id: 62,
            question: "Which language adds behavior to web pages?",
            options: ["JavaScript", "HTML", "CSS", "SQL"],
            answer: "JavaScript"
        },
        {
            id: 63,
            question: "Which language structures web page content?",
            options: ["HTML", "CSS", "Python", "SQL"],
            answer: "HTML"
        },
        {
            id: 64,
            question: "Which HTML tag creates a paragraph?",
            options: ["<p>", "<h1>", "<br>", "<img>"],
            answer: "<p>"
        },
        {
            id: 65,
            question: "Which HTML tag creates the largest heading?",
            options: ["<h1>", "<h6>", "<head>", "<title>"],
            answer: "<h1>"
        },
        {
            id: 66,
            question: "Which HTML tag is used to display an image?",
            options: ["<img>", "<image>", "<picture>", "<src>"],
            answer: "<img>"
        },
        {
            id: 67,
            question: "Which HTML tag creates a hyperlink?",
            options: ["<a>", "<link>", "<href>", "<url>"],
            answer: "<a>"
        },
        {
            id: 68,
            question: "Which HTML tag creates a line break?",
            options: ["<br>", "<break>", "<lb>", "<line>"],
            answer: "<br>"
        },
        {
            id: 69,
            question: "Which CSS property changes text color?",
            options: ["color", "text-color", "font-color", "foreground"],
            answer: "color"
        },
        {
            id: 70,
            question: "Which CSS property changes background color?",
            options: ["background-color", "bg-color", "color-background", "background"],
            answer: "background-color"
        },

        {
            id: 71,
            question: "Which programming language is known for its readability?",
            options: ["Python", "Assembly", "Machine Code", "Binary"],
            answer: "Python"
        },
        {
            id: 72,
            question: "Which symbol starts a comment in Python?",
            options: ["#", "//", "/*", "--"],
            answer: "#"
        },
        {
            id: 73,
            question: "Which function displays output in Python?",
            options: ["print()", "display()", "output()", "show()"],
            answer: "print()"
        },
        {
            id: 74,
            question: "Which keyword defines a function in Python?",
            options: ["def", "function", "fun", "define"],
            answer: "def"
        },
        {
            id: 75,
            question: "Which symbol is used for assignment in Python?",
            options: ["=", "==", ":", "->"],
            answer: "="
        },
        {
            id: 76,
            question: "Which language was created by Dennis Ritchie?",
            options: ["C", "Python", "Java", "JavaScript"],
            answer: "C"
        },
        {
            id: 77,
            question: "Which function is the usual starting point of a C program?",
            options: ["main()", "start()", "begin()", "run()"],
            answer: "main()"
        },
        {
            id: 78,
            question: "Which symbol ends most statements in C?",
            options: [";", ":", ".", ","],
            answer: ";"
        },
        {
            id: 79,
            question: "Which format specifier is used for an integer in C?",
            options: ["%d", "%f", "%c", "%s"],
            answer: "%d"
        },
        {
            id: 80,
            question: "Which format specifier is used for a character in C?",
            options: ["%c", "%d", "%f", "%s"],
            answer: "%c"
        },

        {
            id: 81,
            question: "What does SQL stand for?",
            options: ["Structured Query Language", "Simple Query Language", "System Query Language", "Structured Question Language"],
            answer: "Structured Query Language"
        },
        {
            id: 82,
            question: "What is a database?",
            options: ["Organized collection of data", "Computer monitor", "Programming language", "Network cable"],
            answer: "Organized collection of data"
        },
        {
            id: 83,
            question: "Which SQL command is used to retrieve data?",
            options: ["SELECT", "GET", "FETCHDATA", "READ"],
            answer: "SELECT"
        },
        {
            id: 84,
            question: "Which SQL command adds new records?",
            options: ["INSERT", "ADD", "CREATE", "PUT"],
            answer: "INSERT"
        },
        {
            id: 85,
            question: "Which SQL command modifies existing records?",
            options: ["UPDATE", "CHANGE", "MODIFY", "ALTERDATA"],
            answer: "UPDATE"
        },
        {
            id: 86,
            question: "Which SQL command removes records?",
            options: ["DELETE", "REMOVE", "DROP", "CLEAR"],
            answer: "DELETE"
        },
        {
            id: 87,
            question: "What does DBMS stand for?",
            options: ["Database Management System", "Data Backup Management System", "Database Machine System", "Digital Base Management System"],
            answer: "Database Management System"
        },
        {
            id: 88,
            question: "Which database stores data in tables?",
            options: ["Relational database", "Image database", "Audio database", "Video database"],
            answer: "Relational database"
        },
        {
            id: 89,
            question: "What is a row in a database table commonly called?",
            options: ["Record", "Field", "Column", "Attribute"],
            answer: "Record"
        },
        {
            id: 90,
            question: "What is a column in a database commonly called?",
            options: ["Field", "Record", "Row", "Tuple"],
            answer: "Field"
        },

        {
            id: 91,
            question: "What does AI stand for?",
            options: ["Artificial Intelligence", "Automatic Information", "Advanced Internet", "Artificial Internet"],
            answer: "Artificial Intelligence"
        },
        {
            id: 92,
            question: "What does ML stand for?",
            options: ["Machine Learning", "Machine Language", "Modern Learning", "Managed Logic"],
            answer: "Machine Learning"
        },
        {
            id: 93,
            question: "What does IoT stand for?",
            options: ["Internet of Things", "Internet of Technology", "Input of Things", "Intelligence of Technology"],
            answer: "Internet of Things"
        },
        {
            id: 94,
            question: "What does API stand for?",
            options: ["Application Programming Interface", "Application Program Internet", "Advanced Programming Interface", "Application Process Integration"],
            answer: "Application Programming Interface"
        },
        {
            id: 95,
            question: "What does URL identify?",
            options: ["A resource on the internet", "A CPU", "A keyboard key", "A database table"],
            answer: "A resource on the internet"
        },
        {
            id: 96,
            question: "What is a chatbot?",
            options: ["Software that communicates with users", "A computer cable", "A storage device", "A programming language"],
            answer: "Software that communicates with users"
        },
        {
            id: 97,
            question: "What is a robot?",
            options: ["Programmable machine", "Web browser", "Database", "Operating system"],
            answer: "Programmable machine"
        },
        {
            id: 98,
            question: "What does IoT connect?",
            options: ["Physical devices to networks", "Only computers to printers", "Only phones to TVs", "Only databases"],
            answer: "Physical devices to networks"
        },
        {
            id: 99,
            question: "What is cloud computing?",
            options: ["Using computing resources over the internet", "Cleaning computer hardware", "Programming without electricity", "Storing files only on USB drives"],
            answer: "Using computing resources over the internet"
        },
        {
            id: 100,
            question: "What is cybersecurity?",
            options: ["Protecting systems and data", "Designing websites", "Making videos", "Writing documents"],
            answer: "Protecting systems and data"
        },

        // 101 - 200

        {
            id: 101,
            question: "What is a computer virus?",
            options: ["Malicious software", "Hardware component", "Web browser", "Database"],
            answer: "Malicious software"
        },
        {
            id: 102,
            question: "What is antivirus software used for?",
            options: ["Detecting and removing malware", "Creating websites", "Increasing monitor size", "Printing documents"],
            answer: "Detecting and removing malware"
        },
        {
            id: 103,
            question: "What is a password?",
            options: ["Secret authentication information", "A programming language", "A computer port", "A storage device"],
            answer: "Secret authentication information"
        },
        {
            id: 104,
            question: "What makes a password stronger?",
            options: ["A mixture of characters", "Using only your name", "Using only 123456", "Using only your birthday"],
            answer: "A mixture of characters"
        },
        {
            id: 105,
            question: "What is phishing?",
            options: ["Attempt to steal information using deception", "A type of programming", "A database operation", "A computer game"],
            answer: "Attempt to steal information using deception"
        },
        {
            id: 106,
            question: "What does OTP usually stand for?",
            options: ["One-Time Password", "Online Transfer Program", "One-Time Program", "Open Transfer Password"],
            answer: "One-Time Password"
        },
        {
            id: 107,
            question: "What does PDF stand for?",
            options: ["Portable Document Format", "Personal Data File", "Printed Document File", "Public Document Format"],
            answer: "Portable Document Format"
        },
        {
            id: 108,
            question: "Which company created the PDF format?",
            options: ["Adobe", "Google", "Microsoft", "Apple"],
            answer: "Adobe"
        },
        {
            id: 109,
            question: "What is a screenshot?",
            options: ["Image of what is displayed on a screen", "A computer virus", "A database", "A browser"],
            answer: "Image of what is displayed on a screen"
        },
        {
            id: 110,
            question: "What is a file?",
            options: ["Collection of stored data", "Computer monitor", "Network cable", "Keyboard key"],
            answer: "Collection of stored data"
        },

        {
            id: 111,
            question: "What is a folder used for?",
            options: ["Organizing files", "Increasing RAM", "Connecting Wi-Fi", "Printing"],
            answer: "Organizing files"
        },
        {
            id: 112,
            question: "What is a desktop in a computer OS?",
            options: ["Main graphical workspace", "Hard disk", "Keyboard", "Processor"],
            answer: "Main graphical workspace"
        },
        {
            id: 113,
            question: "What is an icon?",
            options: ["Small graphical representation", "A programming language", "A database", "A network protocol"],
            answer: "Small graphical representation"
        },
        {
            id: 114,
            question: "What is a computer mouse pointer?",
            options: ["On-screen indicator", "Storage device", "Network device", "CPU component"],
            answer: "On-screen indicator"
        },
        {
            id: 115,
            question: "What is rebooting?",
            options: ["Restarting a computer", "Deleting a file", "Installing RAM", "Printing a document"],
            answer: "Restarting a computer"
        },
        {
            id: 116,
            question: "What does GUI stand for?",
            options: ["Graphical User Interface", "General User Internet", "Graphical Utility Input", "General Utility Interface"],
            answer: "Graphical User Interface"
        },
        {
            id: 117,
            question: "What does OS stand for?",
            options: ["Operating System", "Open Software", "Operating Service", "Online System"],
            answer: "Operating System"
        },
        {
            id: 118,
            question: "Which is an example of an operating system?",
            options: ["Windows", "Chrome", "Google", "HTML"],
            answer: "Windows"
        },
        {
            id: 119,
            question: "Which is an example of a search engine?",
            options: ["Google", "Windows", "Linux", "Python"],
            answer: "Google"
        },
        {
            id: 120,
            question: "Which is an example of a programming language?",
            options: ["Python", "Chrome", "Windows", "Google"],
            answer: "Python"
        },

        {
            id: 121,
            question: "What is Java?",
            options: ["Programming language", "Web browser", "Operating system", "Database"],
            answer: "Programming language"
        },
        {
            id: 122,
            question: "What is Python?",
            options: ["Programming language", "Search engine", "Operating system", "Browser"],
            answer: "Programming language"
        },
        {
            id: 123,
            question: "What is JavaScript?",
            options: ["Programming language", "Database", "Operating system", "Hardware"],
            answer: "Programming language"
        },
        {
            id: 124,
            question: "What is C++?",
            options: ["Programming language", "Web browser", "Database", "Operating system"],
            answer: "Programming language"
        },
        {
            id: 125,
            question: "Which language is commonly used for Android development?",
            options: ["Kotlin", "HTML", "CSS", "SQL"],
            answer: "Kotlin"
        },
        {
            id: 126,
            question: "Which language is commonly used for iOS development?",
            options: ["Swift", "HTML", "SQL", "CSS"],
            answer: "Swift"
        },
        {
            id: 127,
            question: "Which language is commonly used for database queries?",
            options: ["SQL", "HTML", "CSS", "PNG"],
            answer: "SQL"
        },
        {
            id: 128,
            question: "Which language is used to structure web pages?",
            options: ["HTML", "SQL", "Python", "C"],
            answer: "HTML"
        },
        {
            id: 129,
            question: "Which language is commonly used to create dynamic web behavior?",
            options: ["JavaScript", "HTML", "CSS", "SQL"],
            answer: "JavaScript"
        },
        {
            id: 130,
            question: "Which language is commonly used for data science?",
            options: ["Python", "HTML", "CSS", "XML"],
            answer: "Python"
        },

        {
            id: 131,
            question: "What is a variable?",
            options: ["Named storage for a value", "A computer monitor", "A network cable", "A printer"],
            answer: "Named storage for a value"
        },
        {
            id: 132,
            question: "What is a constant?",
            options: ["A value that does not change", "A changing variable", "A browser", "A database"],
            answer: "A value that does not change"
        },
        {
            id: 133,
            question: "What is a loop used for?",
            options: ["Repeating instructions", "Deleting programs", "Connecting networks", "Printing images"],
            answer: "Repeating instructions"
        },
        {
            id: 134,
            question: "What is an if statement used for?",
            options: ["Making decisions", "Creating hardware", "Connecting Wi-Fi", "Printing"],
            answer: "Making decisions"
        },
        {
            id: 135,
            question: "What is a function?",
            options: ["Reusable block of code", "A monitor", "A database table", "A network cable"],
            answer: "Reusable block of code"
        },
        {
            id: 136,
            question: "What is an algorithm?",
            options: ["Step-by-step procedure", "Computer hardware", "Web browser", "Operating system"],
            answer: "Step-by-step procedure"
        },
        {
            id: 137,
            question: "What is debugging?",
            options: ["Finding and fixing errors", "Creating a folder", "Printing a document", "Connecting a monitor"],
            answer: "Finding and fixing errors"
        },
        {
            id: 138,
            question: "What is a bug in software?",
            options: ["An error or defect", "A keyboard", "A monitor", "A database"],
            answer: "An error or defect"
        },
        {
            id: 139,
            question: "What is source code?",
            options: ["Human-readable program instructions", "A computer monitor", "A network cable", "A printer"],
            answer: "Human-readable program instructions"
        },
        {
            id: 140,
            question: "What is a compiler?",
            options: ["Program that translates source code", "A web browser", "A database", "A keyboard"],
            answer: "Program that translates source code"
        },

        {
            id: 141,
            question: "What is an interpreter?",
            options: ["Program that executes/translates code", "A monitor", "A router", "A printer"],
            answer: "Program that executes/translates code"
        },
        {
            id: 142,
            question: "What is a programming syntax?",
            options: ["Rules for writing code", "Computer hardware", "Database storage", "Internet connection"],
            answer: "Rules for writing code"
        },
        {
            id: 143,
            question: "What is an array?",
            options: ["Collection of elements", "Network device", "Operating system", "Browser"],
            answer: "Collection of elements"
        },
        {
            id: 144,
            question: "Which data structure follows FIFO?",
            options: ["Queue", "Stack", "Tree", "Graph"],
            answer: "Queue"
        },
        {
            id: 145,
            question: "Which data structure follows LIFO?",
            options: ["Stack", "Queue", "Tree", "Graph"],
            answer: "Stack"
        },
        {
            id: 146,
            question: "What is a node in a data structure?",
            options: ["Element containing data", "A monitor", "A browser", "A printer"],
            answer: "Element containing data"
        },
        {
            id: 147,
            question: "What is a tree in computer science?",
            options: ["Hierarchical data structure", "Network cable", "Operating system", "Compiler"],
            answer: "Hierarchical data structure"
        },
        {
            id: 148,
            question: "What is a graph in computer science?",
            options: ["Collection of vertices and edges", "A monitor", "A database only", "A keyboard"],
            answer: "Collection of vertices and edges"
        },
        {
            id: 149,
            question: "What is searching?",
            options: ["Finding an item", "Deleting all data", "Printing", "Formatting a disk"],
            answer: "Finding an item"
        },
        {
            id: 150,
            question: "What is sorting?",
            options: ["Arranging data in an order", "Deleting data", "Encrypting data", "Printing data"],
            answer: "Arranging data in an order"
        },

        {
            id: 151,
            question: "What is email?",
            options: ["Electronic mail", "Electronic memory", "External machine", "Encoded message"],
            answer: "Electronic mail"
        },
        {
            id: 152,
            question: "What symbol is commonly used in email addresses?",
            options: ["@", "#", "$", "&"],
            answer: "@"
        },
        {
            id: 153,
            question: "What is a domain name?",
            options: ["Human-readable website address", "A password", "A CPU component", "A file extension"],
            answer: "Human-readable website address"
        },
        {
            id: 154,
            question: "What is a website?",
            options: ["Collection of web pages", "A keyboard", "A processor", "A printer"],
            answer: "Collection of web pages"
        },
        {
            id: 155,
            question: "What is a web page?",
            options: ["Document displayed in a browser", "Computer hardware", "Database server", "Keyboard"],
            answer: "Document displayed in a browser"
        },
        {
            id: 156,
            question: "What is a hyperlink?",
            options: ["Clickable link to another resource", "Computer memory", "A keyboard key", "A CPU"],
            answer: "Clickable link to another resource"
        },
        {
            id: 157,
            question: "What is a browser used for?",
            options: ["Accessing websites", "Editing hardware", "Increasing RAM", "Scanning viruses only"],
            answer: "Accessing websites"
        },
        {
            id: 158,
            question: "What is a homepage?",
            options: ["Main page of a website", "A database table", "A computer chip", "A network cable"],
            answer: "Main page of a website"
        },
        {
            id: 159,
            question: "What is downloading?",
            options: ["Receiving data from the internet", "Sending data to the internet", "Deleting data", "Printing data"],
            answer: "Receiving data from the internet"
        },
        {
            id: 160,
            question: "What is uploading?",
            options: ["Sending data to a server", "Receiving data", "Deleting files", "Printing documents"],
            answer: "Sending data to a server"
        },

        {
            id: 161,
            question: "What is a server?",
            options: ["Computer that provides services or resources", "A keyboard", "A monitor", "A mouse"],
            answer: "Computer that provides services or resources"
        },
        {
            id: 162,
            question: "What is a client?",
            options: ["System that requests a service", "A printer", "A hard disk", "A monitor"],
            answer: "System that requests a service"
        },
        {
            id: 163,
            question: "What is hosting?",
            options: ["Making a website available on a server", "Printing a website", "Deleting a website", "Designing a logo"],
            answer: "Making a website available on a server"
        },
        {
            id: 164,
            question: "What is a database server?",
            options: ["Server that manages databases", "A keyboard", "A monitor", "A printer"],
            answer: "Server that manages databases"
        },
        {
            id: 165,
            question: "What is a file server?",
            options: ["Server used to store and provide files", "A programming language", "A browser", "A monitor"],
            answer: "Server used to store and provide files"
        },
        {
            id: 166,
            question: "What is cloud storage?",
            options: ["Online storage", "RAM", "CPU cache", "USB port"],
            answer: "Online storage"
        },
        {
            id: 167,
            question: "Which is a cloud storage service?",
            options: ["Google Drive", "Notepad", "Calculator", "Paint"],
            answer: "Google Drive"
        },
        {
            id: 168,
            question: "What is a backup?",
            options: ["Copy of data kept for recovery", "A computer virus", "A browser", "A programming language"],
            answer: "Copy of data kept for recovery"
        },
        {
            id: 169,
            question: "Why are backups useful?",
            options: ["They help recover lost data", "They increase screen size", "They increase keyboard speed", "They remove the CPU"],
            answer: "They help recover lost data"
        },
        {
            id: 170,
            question: "What is a USB flash drive?",
            options: ["Portable storage device", "Processor", "Monitor", "Router"],
            answer: "Portable storage device"
        },

        {
            id: 171,
            question: "What is a hard disk used for?",
            options: ["Storing data", "Displaying images", "Typing", "Connecting Wi-Fi"],
            answer: "Storing data"
        },
        {
            id: 172,
            question: "What is a motherboard?",
            options: ["Main circuit board", "Storage file", "Browser", "Printer"],
            answer: "Main circuit board"
        },
        {
            id: 173,
            question: "What is a GPU mainly used for?",
            options: ["Graphics processing", "Typing text", "Printing", "Network routing"],
            answer: "Graphics processing"
        },
        {
            id: 174,
            question: "What does GPU stand for?",
            options: ["Graphics Processing Unit", "General Processing Unit", "Graphics Program Utility", "General Program Unit"],
            answer: "Graphics Processing Unit"
        },
        {
            id: 175,
            question: "What does HDD stand for?",
            options: ["Hard Disk Drive", "High Data Device", "Hardware Data Drive", "Hard Digital Disk"],
            answer: "Hard Disk Drive"
        },
        {
            id: 176,
            question: "What does SSD stand for?",
            options: ["Solid State Drive", "System Storage Device", "Solid Storage Disk", "System State Drive"],
            answer: "Solid State Drive"
        },
        {
            id: 177,
            question: "Which component supplies electrical power to a computer?",
            options: ["Power Supply Unit", "CPU", "RAM", "GPU"],
            answer: "Power Supply Unit"
        },
        {
            id: 178,
            question: "What does PSU stand for?",
            options: ["Power Supply Unit", "Processing System Unit", "Power Storage Utility", "Program Supply Unit"],
            answer: "Power Supply Unit"
        },
        {
            id: 179,
            question: "Which device provides sound output?",
            options: ["Speaker", "Scanner", "Keyboard", "Router"],
            answer: "Speaker"
        },
        {
            id: 180,
            question: "Which device captures sound?",
            options: ["Microphone", "Monitor", "Printer", "Router"],
            answer: "Microphone"
        },

        {
            id: 181,
            question: "What is a webcam used for?",
            options: ["Capturing video", "Printing", "Storing files", "Routing networks"],
            answer: "Capturing video"
        },
        {
            id: 182,
            question: "What is a touchscreen?",
            options: ["Display that accepts touch input", "Storage device", "Printer", "Router"],
            answer: "Display that accepts touch input"
        },
        {
            id: 183,
            question: "What is a laptop?",
            options: ["Portable computer", "Printer", "Router", "Database"],
            answer: "Portable computer"
        },
        {
            id: 184,
            question: "What is a smartphone?",
            options: ["Mobile computing device", "Printer", "Router", "Server only"],
            answer: "Mobile computing device"
        },
        {
            id: 185,
            question: "What is a tablet?",
            options: ["Portable touchscreen computer", "Desktop printer", "Network switch", "Database"],
            answer: "Portable touchscreen computer"
        },
        {
            id: 186,
            question: "What is a smartwatch?",
            options: ["Wearable computing device", "Printer", "Router", "Hard disk"],
            answer: "Wearable computing device"
        },
        {
            id: 187,
            question: "What is a QR code?",
            options: ["Machine-readable code", "Programming language", "Operating system", "Database"],
            answer: "Machine-readable code"
        },
        {
            id: 188,
            question: "What does NFC stand for?",
            options: ["Near Field Communication", "Network File Connection", "Near File Communication", "Network Field Control"],
            answer: "Near Field Communication"
        },
        {
            id: 189,
            question: "What is GPS used for?",
            options: ["Determining location", "Editing documents", "Increasing RAM", "Printing"],
            answer: "Determining location"
        },
        {
            id: 190,
            question: "What does GPS stand for?",
            options: ["Global Positioning System", "General Positioning Service", "Global Program System", "General Position System"],
            answer: "Global Positioning System"
        },

        {
            id: 191,
            question: "What is encryption?",
            options: ["Converting data into protected form", "Deleting data", "Printing data", "Copying files"],
            answer: "Converting data into protected form"
        },
        {
            id: 192,
            question: "What is decryption?",
            options: ["Converting encrypted data back to readable form", "Deleting data", "Printing data", "Backing up data"],
            answer: "Converting encrypted data back to readable form"
        },
        {
            id: 193,
            question: "What is malware?",
            options: ["Malicious software", "Hardware", "Database", "Browser"],
            answer: "Malicious software"
        },
        {
            id: 194,
            question: "What is spyware?",
            options: ["Software that secretly monitors activity", "A printer", "A database", "A keyboard"],
            answer: "Software that secretly monitors activity"
        },
        {
            id: 195,
            question: "What is ransomware?",
            options: ["Malware that demands payment", "A web browser", "A programming language", "A database"],
            answer: "Malware that demands payment"
        },
        {
            id: 196,
            question: "What is a firewall?",
            options: ["Network security system", "Printer", "Keyboard", "Database"],
            answer: "Network security system"
        },
        {
            id: 197,
            question: "What is two-factor authentication?",
            options: ["Using two verification methods", "Using two computers", "Using two passwords only", "Using two browsers"],
            answer: "Using two verification methods"
        },
        {
            id: 198,
            question: "What is biometric authentication?",
            options: ["Authentication using physical characteristics", "Authentication using a printer", "Network routing", "Data compression"],
            answer: "Authentication using physical characteristics"
        },
        {
            id: 199,
            question: "Which is a biometric method?",
            options: ["Fingerprint", "Username", "Folder", "IP address"],
            answer: "Fingerprint"
        },
        {
            id: 200,
            question: "What should you do with a suspicious email link?",
            options: ["Avoid clicking it", "Click immediately", "Forward it to everyone", "Enter your password"],
            answer: "Avoid clicking it"
        },

        // 201 - 275

        {
            id: 201,
            question: "What does AI stand for?",
            options: ["Artificial Intelligence", "Automated Internet", "Advanced Input", "Artificial Internet"],
            answer: "Artificial Intelligence"
        },
        {
            id: 202,
            question: "What is machine learning?",
            options: ["A method where computers learn from data", "A keyboard technology", "A monitor type", "A storage device"],
            answer: "A method where computers learn from data"
        },
        {
            id: 203,
            question: "What is a dataset?",
            options: ["Collection of data", "A processor", "A browser", "A keyboard"],
            answer: "Collection of data"
        },
        {
            id: 204,
            question: "What is a chatbot?",
            options: ["Program that interacts with users", "Storage device", "Network cable", "Operating system"],
            answer: "Program that interacts with users"
        },
        {
            id: 205,
            question: "What is a prompt in AI?",
            options: ["Instruction or input given to an AI", "Computer hardware", "Database table", "Network cable"],
            answer: "Instruction or input given to an AI"
        },
        {
            id: 206,
            question: "What does LLM stand for?",
            options: ["Large Language Model", "Long Learning Machine", "Language Learning Module", "Large Logic Machine"],
            answer: "Large Language Model"
        },
        {
            id: 207,
            question: "What is computer vision?",
            options: ["AI field involving images and video", "Computer monitor", "Keyboard technology", "Database design"],
            answer: "AI field involving images and video"
        },
        {
            id: 208,
            question: "What is natural language processing?",
            options: ["Technology for processing human language", "Network routing", "Computer graphics", "File storage"],
            answer: "Technology for processing human language"
        },
        {
            id: 209,
            question: "What is generative AI?",
            options: ["AI that can generate new content", "A storage device", "A network cable", "A printer"],
            answer: "AI that can generate new content"
        },
        {
            id: 210,
            question: "Which is an example of AI technology?",
            options: ["Voice assistant", "Keyboard", "Monitor", "USB cable"],
            answer: "Voice assistant"
        },

        {
            id: 211,
            question: "What is a file extension?",
            options: ["Characters identifying a file type", "A password", "A CPU", "A network"],
            answer: "Characters identifying a file type"
        },
        {
            id: 212,
            question: "Which extension is commonly used for images?",
            options: [".jpg", ".exe", ".html", ".sql"],
            answer: ".jpg"
        },
        {
            id: 213,
            question: "Which extension is commonly used for PNG images?",
            options: [".png", ".docx", ".exe", ".py"],
            answer: ".png"
        },
        {
            id: 214,
            question: "Which extension is commonly used for Python files?",
            options: [".py", ".python", ".pt", ".pyt"],
            answer: ".py"
        },
        {
            id: 215,
            question: "Which extension is commonly used for text files?",
            options: [".txt", ".textfile", ".doc", ".data"],
            answer: ".txt"
        },
        {
            id: 216,
            question: "Which extension is commonly used for PDF documents?",
            options: [".pdf", ".doc", ".document", ".pdoc"],
            answer: ".pdf"
        },
        {
            id: 217,
            question: "Which format is commonly used for compressed files?",
            options: [".zip", ".txt", ".html", ".jpg"],
            answer: ".zip"
        },
        {
            id: 218,
            question: "What is ZIP compression used for?",
            options: ["Reducing file size and packaging files", "Increasing RAM", "Creating CPUs", "Connecting networks"],
            answer: "Reducing file size and packaging files"
        },
        {
            id: 219,
            question: "What is a PDF reader used for?",
            options: ["Opening PDF documents", "Editing hardware", "Connecting Wi-Fi", "Creating CPUs"],
            answer: "Opening PDF documents"
        },
        {
            id: 220,
            question: "What is Microsoft PowerPoint used for?",
            options: ["Creating presentations", "Writing operating systems", "Managing routers", "Scanning viruses"],
            answer: "Creating presentations"
        },

        {
            id: 221,
            question: "What is Microsoft Excel mainly used for?",
            options: ["Spreadsheets", "Video editing", "Web browsing", "Antivirus"],
            answer: "Spreadsheets"
        },
        {
            id: 222,
            question: "What is Microsoft Word mainly used for?",
            options: ["Word processing", "Network routing", "Programming hardware", "Database servers"],
            answer: "Word processing"
        },
        {
            id: 223,
            question: "What is a spreadsheet cell?",
            options: ["Intersection of a row and column", "A computer chip", "A browser", "A printer"],
            answer: "Intersection of a row and column"
        },
        {
            id: 224,
            question: "What is a spreadsheet row?",
            options: ["Horizontal arrangement of cells", "Vertical arrangement of cells", "A database server", "A computer port"],
            answer: "Horizontal arrangement of cells"
        },
        {
            id: 225,
            question: "What is a spreadsheet column?",
            options: ["Vertical arrangement of cells", "Horizontal arrangement of cells", "A CPU", "A browser"],
            answer: "Vertical arrangement of cells"
        },
        {
            id: 226,
            question: "What is a presentation slide?",
            options: ["Single page of a presentation", "Database record", "Web server", "Computer chip"],
            answer: "Single page of a presentation"
        },
        {
            id: 227,
            question: "What is a slide deck?",
            options: ["Collection of presentation slides", "Computer hardware", "Database", "Network"],
            answer: "Collection of presentation slides"
        },
        {
            id: 228,
            question: "What is a hyperlink in PowerPoint?",
            options: ["Clickable link", "Computer chip", "Database", "Printer"],
            answer: "Clickable link"
        },
        {
            id: 229,
            question: "What is formatting?",
            options: ["Changing the appearance of content", "Deleting a computer", "Creating RAM", "Routing networks"],
            answer: "Changing the appearance of content"
        },
        {
            id: 230,
            question: "What is a font?",
            options: ["Design/style of text", "Computer memory", "Network device", "Database"],
            answer: "Design/style of text"
        },

        {
            id: 231,
            question: "What is open-source software?",
            options: ["Software whose source code is available under its license", "Paid hardware", "A closed database", "A network cable"],
            answer: "Software whose source code is available under its license"
        },
        {
            id: 232,
            question: "What is freeware?",
            options: ["Software available without a purchase price", "Hardware", "A programming language", "A database"],
            answer: "Software available without a purchase price"
        },
        {
            id: 233,
            question: "What is software?",
            options: ["Programs and instructions", "Physical components", "Network cables", "Computer desks"],
            answer: "Programs and instructions"
        },
        {
            id: 234,
            question: "What is hardware?",
            options: ["Physical computer components", "Programs", "Websites", "Databases"],
            answer: "Physical computer components"
        },
        {
            id: 235,
            question: "Which is hardware?",
            options: ["Keyboard", "Windows", "Python", "Chrome"],
            answer: "Keyboard"
        },
        {
            id: 236,
            question: "Which is software?",
            options: ["Windows", "Keyboard", "Monitor", "Mouse"],
            answer: "Windows"
        },
        {
            id: 237,
            question: "What is firmware?",
            options: ["Software stored in hardware", "A printer", "A browser", "A network cable"],
            answer: "Software stored in hardware"
        },
        {
            id: 238,
            question: "What is an application?",
            options: ["Software designed for a specific task", "A CPU", "A monitor", "A keyboard"],
            answer: "Software designed for a specific task"
        },
        {
            id: 239,
            question: "What is a mobile app?",
            options: ["Application designed for mobile devices", "A network cable", "A CPU", "A printer"],
            answer: "Application designed for mobile devices"
        },
        {
            id: 240,
            question: "What is an update?",
            options: ["New or improved version of software", "A keyboard", "A monitor", "A database table"],
            answer: "New or improved version of software"
        },

        {
            id: 241,
            question: "What is virtualization?",
            options: ["Creating virtual computing environments", "Printing documents", "Editing images", "Connecting a keyboard"],
            answer: "Creating virtual computing environments"
        },
        {
            id: 242,
            question: "What is a virtual machine?",
            options: ["Software-based computer environment", "Physical keyboard", "Network cable", "Printer"],
            answer: "Software-based computer environment"
        },
        {
            id: 243,
            question: "What is a data center?",
            options: ["Facility containing computing equipment", "A keyboard", "A browser", "A mobile app"],
            answer: "Facility containing computing equipment"
        },
        {
            id: 244,
            question: "What is a data packet?",
            options: ["Unit of data sent over a network", "Computer monitor", "Keyboard key", "Hard disk"],
            answer: "Unit of data sent over a network"
        },
        {
            id: 245,
            question: "What is bandwidth?",
            options: ["Data-carrying capacity of a connection", "Storage capacity only", "CPU speed", "Screen size"],
            answer: "Data-carrying capacity of a connection"
        },
        {
            id: 246,
            question: "What is latency?",
            options: ["Delay in communication", "Storage capacity", "Screen resolution", "CPU temperature"],
            answer: "Delay in communication"
        },
        {
            id: 247,
            question: "What is ping commonly used to test?",
            options: ["Network reachability", "Printer ink", "RAM size", "Screen brightness"],
            answer: "Network reachability"
        },
        {
            id: 248,
            question: "What does Mbps measure?",
            options: ["Data transfer rate", "Storage size", "Screen size", "CPU temperature"],
            answer: "Data transfer rate"
        },
        {
            id: 249,
            question: "What does GHz measure?",
            options: ["Frequency", "Storage capacity", "File size", "Screen resolution"],
            answer: "Frequency"
        },
        {
            id: 250,
            question: "What does GB commonly measure?",
            options: ["Data storage capacity", "Network latency", "Screen brightness", "CPU temperature"],
            answer: "Data storage capacity"
        },

        {
            id: 251,
            question: "What does KB stand for?",
            options: ["Kilobyte", "Keyboard Byte", "Kernel Byte", "Knowledge Base"],
            answer: "Kilobyte"
        },
        {
            id: 252,
            question: "What does MB stand for?",
            options: ["Megabyte", "Memory Byte", "Machine Bit", "Main Byte"],
            answer: "Megabyte"
        },
        {
            id: 253,
            question: "What does GB stand for?",
            options: ["Gigabyte", "General Byte", "Graphics Bit", "Global Byte"],
            answer: "Gigabyte"
        },
        {
            id: 254,
            question: "What does TB stand for?",
            options: ["Terabyte", "Technology Byte", "Total Bit", "Transfer Byte"],
            answer: "Terabyte"
        },
        {
            id: 255,
            question: "Which is larger?",
            options: ["TB", "KB", "MB", "Byte"],
            answer: "TB"
        },
        {
            id: 256,
            question: "What is a bit?",
            options: ["Smallest basic unit of digital information", "A keyboard", "A monitor", "A file"],
            answer: "Smallest basic unit of digital information"
        },
        {
            id: 257,
            question: "What is a byte?",
            options: ["8 bits", "4 bits", "16 bits", "2 bits"],
            answer: "8 bits"
        },
        {
            id: 258,
            question: "What is hexadecimal base?",
            options: ["16", "2", "8", "10"],
            answer: "16"
        },
        {
            id: 259,
            question: "What is decimal number system base?",
            options: ["10", "2", "8", "16"],
            answer: "10"
        },
        {
            id: 260,
            question: "What is octal number system base?",
            options: ["8", "2", "10", "16"],
            answer: "8"
        },

        {
            id: 261,
            question: "Which symbol represents logical AND in many programming languages?",
            options: ["&&", "||", "!", "=="],
            answer: "&&"
        },
        {
            id: 262,
            question: "Which symbol commonly represents logical OR in many programming languages?",
            options: ["||", "&&", "!", "!="],
            answer: "||"
        },
        {
            id: 263,
            question: "Which operator means equality comparison in many languages?",
            options: ["==", "=", "!=", "=>"],
            answer: "=="
        },
        {
            id: 264,
            question: "Which operator commonly means NOT equal?",
            options: ["!=", "==", "=", "=>"],
            answer: "!="
        },
        {
            id: 265,
            question: "What is HTML used for?",
            options: ["Structuring web pages", "Styling only", "Database queries", "Network routing"],
            answer: "Structuring web pages"
        },
        {
            id: 266,
            question: "What is CSS used for?",
            options: ["Styling web pages", "Database queries", "Network routing", "Operating systems"],
            answer: "Styling web pages"
        },
        {
            id: 267,
            question: "What is JavaScript commonly used for?",
            options: ["Adding interactivity to websites", "Creating CPUs", "Printing documents", "Managing electricity"],
            answer: "Adding interactivity to websites"
        },
        {
            id: 268,
            question: "What is Git?",
            options: ["Version control system", "Web browser", "Database", "Operating system"],
            answer: "Version control system"
        },
        {
            id: 269,
            question: "What is GitHub?",
            options: ["Platform for hosting and collaborating on code", "Operating system", "CPU", "Database language"],
            answer: "Platform for hosting and collaborating on code"
        },
        {
            id: 270,
            question: "What is a repository in Git?",
            options: ["Storage location for a project's files and history", "A printer", "A monitor", "A router"],
            answer: "Storage location for a project's files and history"
        },

        {
            id: 271,
            question: "What does URL stand for?",
            options: ["Uniform Resource Locator", "Universal Resource Language", "Uniform Routing Link", "Universal Reference Locator"],
            answer: "Uniform Resource Locator"
        },
        {
            id: 272,
            question: "What does WWW refer to?",
            options: ["World Wide Web", "World Web Window", "Wide World Window", "Web World Work"],
            answer: "World Wide Web"
        },
        {
            id: 273,
            question: "What is the internet?",
            options: ["Global network of interconnected networks", "A single computer", "A printer", "A programming language"],
            answer: "Global network of interconnected networks"
        },
        {
            id: 274,
            question: "What is a browser tab?",
            options: ["Separate page/session within a browser window", "A CPU", "A database", "A network cable"],
            answer: "Separate page/session within a browser window"
        },
        {
            id: 275,
            question: "Which device is commonly used to connect a computer to a wired network?",
            options: ["Ethernet cable", "Speaker", "Keyboard", "Monitor"],
            answer: "Ethernet cable"
        }
    ],


    // ========================================================
    // ROUND 2 - 200 MEDIUM QUESTIONS
    // ========================================================

    round2: [

        {
            id: 1,
            question: "Which data structure uses FIFO ordering?",
            options: ["Queue", "Stack", "Tree", "Heap"],
            answer: "Queue"
        },
        {
            id: 2,
            question: "Which data structure uses LIFO ordering?",
            options: ["Stack", "Queue", "Graph", "Linked List"],
            answer: "Stack"
        },
        {
            id: 3,
            question: "Which data structure is best suited for recursive function calls?",
            options: ["Stack", "Queue", "Array", "Graph"],
            answer: "Stack"
        },
        {
            id: 4,
            question: "What is the average time complexity of binary search?",
            options: ["O(log n)", "O(n)", "O(n²)", "O(1)"],
            answer: "O(log n)"
        },
        {
            id: 5,
            question: "What is the worst-case time complexity of linear search?",
            options: ["O(n)", "O(log n)", "O(1)", "O(n log n)"],
            answer: "O(n)"
        },
        {
            id: 6,
            question: "Which sorting algorithm repeatedly selects the smallest element?",
            options: ["Selection Sort", "Merge Sort", "Quick Sort", "Heap Sort"],
            answer: "Selection Sort"
        },
        {
            id: 7,
            question: "Which sorting algorithm uses divide and conquer?",
            options: ["Merge Sort", "Bubble Sort", "Selection Sort", "Linear Sort"],
            answer: "Merge Sort"
        },
        {
            id: 8,
            question: "Which sorting algorithm is commonly based on a pivot?",
            options: ["Quick Sort", "Bubble Sort", "Selection Sort", "Counting Sort"],
            answer: "Quick Sort"
        },
        {
            id: 9,
            question: "Which data structure consists of nodes connected by links?",
            options: ["Linked List", "Array", "Stack only", "Matrix"],
            answer: "Linked List"
        },
        {
            id: 10,
            question: "Which structure represents hierarchical relationships?",
            options: ["Tree", "Queue", "Array", "Stack"],
            answer: "Tree"
        },

        {
            id: 11,
            question: "Which traversal visits root before its subtrees?",
            options: ["Preorder", "Inorder", "Postorder", "Reverse order"],
            answer: "Preorder"
        },
        {
            id: 12,
            question: "Which traversal visits root between left and right subtrees?",
            options: ["Inorder", "Preorder", "Postorder", "Level-only"],
            answer: "Inorder"
        },
        {
            id: 13,
            question: "Which traversal visits root after its subtrees?",
            options: ["Postorder", "Preorder", "Inorder", "Breadth-first"],
            answer: "Postorder"
        },
        {
            id: 14,
            question: "Which graph traversal uses a queue?",
            options: ["BFS", "DFS", "Binary Search", "Hashing"],
            answer: "BFS"
        },
        {
            id: 15,
            question: "Which graph traversal commonly uses a stack or recursion?",
            options: ["DFS", "BFS", "Binary Search", "Selection"],
            answer: "DFS"
        },
        {
            id: 16,
            question: "What does BFS stand for?",
            options: ["Breadth-First Search", "Binary-First Search", "Basic File Search", "Breadth File System"],
            answer: "Breadth-First Search"
        },
        {
            id: 17,
            question: "What does DFS stand for?",
            options: ["Depth-First Search", "Data File Search", "Direct First Search", "Depth File System"],
            answer: "Depth-First Search"
        },
        {
            id: 18,
            question: "What is a binary tree?",
            options: ["Tree with at most two children per node", "Tree with two roots", "Tree with two levels only", "Tree containing only binary values"],
            answer: "Tree with at most two children per node"
        },
        {
            id: 19,
            question: "What is a binary search tree?",
            options: ["Ordered binary tree", "Tree containing only 0 and 1", "Graph", "Queue"],
            answer: "Ordered binary tree"
        },
        {
            id: 20,
            question: "What is a leaf node?",
            options: ["Node with no children", "Root node", "Node with two children", "Parent node"],
            answer: "Node with no children"
        },

        {
            id: 21,
            question: "Which SQL clause filters rows?",
            options: ["WHERE", "ORDER BY", "GROUP BY", "SELECT"],
            answer: "WHERE"
        },
        {
            id: 22,
            question: "Which SQL clause sorts query results?",
            options: ["ORDER BY", "SORT", "WHERE", "GROUP"],
            answer: "ORDER BY"
        },
        {
            id: 23,
            question: "Which SQL clause groups rows?",
            options: ["GROUP BY", "ORDER BY", "WHERE", "COLLECT BY"],
            answer: "GROUP BY"
        },
        {
            id: 24,
            question: "Which SQL function counts rows?",
            options: ["COUNT()", "SUM()", "TOTAL()", "ROWS()"],
            answer: "COUNT()"
        },
        {
            id: 25,
            question: "Which SQL function calculates an average?",
            options: ["AVG()", "MEAN()", "AVERAGE()", "MID()"],
            answer: "AVG()"
        },
        {
            id: 26,
            question: "Which SQL function returns the largest value?",
            options: ["MAX()", "LARGE()", "HIGH()", "TOP()"],
            answer: "MAX()"
        },
        {
            id: 27,
            question: "Which SQL function returns the smallest value?",
            options: ["MIN()", "SMALL()", "LOW()", "BOTTOM()"],
            answer: "MIN()"
        },
        {
            id: 28,
            question: "Which SQL command creates a table?",
            options: ["CREATE TABLE", "MAKE TABLE", "NEW TABLE", "ADD TABLE"],
            answer: "CREATE TABLE"
        },
        {
            id: 29,
            question: "Which SQL command removes a table?",
            options: ["DROP TABLE", "DELETE TABLE", "REMOVE TABLE", "CLEAR TABLE"],
            answer: "DROP TABLE"
        },
        {
            id: 30,
            question: "Which SQL keyword removes duplicate results?",
            options: ["DISTINCT", "UNIQUEONLY", "REMOVE", "SINGLE"],
            answer: "DISTINCT"
        },

        {
            id: 31,
            question: "What is a primary key?",
            options: ["Unique identifier for a record", "Duplicate field", "Foreign table", "Temporary value"],
            answer: "Unique identifier for a record"
        },
        {
            id: 32,
            question: "What is a foreign key?",
            options: ["Field referencing another table", "Primary password", "Unique database server", "Temporary key"],
            answer: "Field referencing another table"
        },
        {
            id: 33,
            question: "What is normalization?",
            options: ["Organizing database tables to reduce redundancy", "Encrypting a database", "Deleting records", "Backing up files"],
            answer: "Organizing database tables to reduce redundancy"
        },
        {
            id: 34,
            question: "What is redundancy in a database?",
            options: ["Unnecessary repeated data", "Encrypted data", "Missing data", "Sorted data"],
            answer: "Unnecessary repeated data"
        },
        {
            id: 35,
            question: "Which normal form removes repeating groups?",
            options: ["First Normal Form", "Second Normal Form", "Third Normal Form", "Fourth Normal Form"],
            answer: "First Normal Form"
        },
        {
            id: 36,
            question: "Which SQL operation combines rows from related tables?",
            options: ["JOIN", "MERGEONLY", "CONNECT", "LINK"],
            answer: "JOIN"
        },
        {
            id: 37,
            question: "Which JOIN returns matching rows from both tables?",
            options: ["INNER JOIN", "OUTER JOIN", "LEFT JOIN", "RIGHT JOIN"],
            answer: "INNER JOIN"
        },
        {
            id: 38,
            question: "Which SQL command changes table structure?",
            options: ["ALTER", "UPDATE", "MODIFY ROW", "CHANGE DATA"],
            answer: "ALTER"
        },
        {
            id: 39,
            question: "What does ACID relate to?",
            options: ["Database transactions", "Web design", "Networking cables", "Image processing"],
            answer: "Database transactions"
        },
        {
            id: 40,
            question: "What does atomicity mean in transactions?",
            options: ["All or nothing", "Fast execution", "Data duplication", "Automatic sorting"],
            answer: "All or nothing"
        },

        {
            id: 41,
            question: "Which keyword declares a variable in JavaScript?",
            options: ["let", "define", "varname", "variable"],
            answer: "let"
        },
        {
            id: 42,
            question: "Which JavaScript keyword creates a constant?",
            options: ["const", "constant", "fixed", "static"],
            answer: "const"
        },
        {
            id: 43,
            question: "Which JavaScript function prints output to the console?",
            options: ["console.log()", "print()", "display()", "writeConsole()"],
            answer: "console.log()"
        },
        {
            id: 44,
            question: "Which symbol is used for strict equality in JavaScript?",
            options: ["===", "=", "==", "!="],
            answer: "==="
        },
        {
            id: 45,
            question: "Which symbol is used for strict inequality in JavaScript?",
            options: ["!==", "!=", "==", "==="],
            answer: "!=="
        },
        {
            id: 46,
            question: "Which method adds an element to the end of a JavaScript array?",
            options: ["push()", "add()", "append()", "insert()"],
            answer: "push()"
        },
        {
            id: 47,
            question: "Which method removes the last array element?",
            options: ["pop()", "remove()", "deleteLast()", "shift()"],
            answer: "pop()"
        },
        {
            id: 48,
            question: "Which method removes the first array element?",
            options: ["shift()", "pop()", "removeFirst()", "delete()"],
            answer: "shift()"
        },
        {
            id: 49,
            question: "Which method adds an element to the beginning of an array?",
            options: ["unshift()", "push()", "prepend()", "start()"],
            answer: "unshift()"
        },
        {
            id: 50,
            question: "What does JSON stand for?",
            options: ["JavaScript Object Notation", "Java Source Object Network", "JavaScript Online Notation", "JSON Object Network"],
            answer: "JavaScript Object Notation"
        },

        {
            id: 51,
            question: "Which HTML element contains the main visible page content?",
            options: ["body", "head", "meta", "title"],
            answer: "body"
        },
        {
            id: 52,
            question: "Which HTML element contains page metadata?",
            options: ["head", "body", "main", "footer"],
            answer: "head"
        },
        {
            id: 53,
            question: "Which HTML attribute specifies an image path?",
            options: ["src", "href", "path", "link"],
            answer: "src"
        },
        {
            id: 54,
            question: "Which HTML attribute specifies a hyperlink destination?",
            options: ["href", "src", "link", "target-url"],
            answer: "href"
        },
        {
            id: 55,
            question: "Which HTML element creates an unordered list?",
            options: ["<ul>", "<ol>", "<list>", "<li>"],
            answer: "<ul>"
        },
        {
            id: 56,
            question: "Which HTML element creates an ordered list?",
            options: ["<ol>", "<ul>", "<li>", "<order>"],
            answer: "<ol>"
        },
        {
            id: 57,
            question: "Which tag represents a list item?",
            options: ["<li>", "<item>", "<list>", "<element>"],
            answer: "<li>"
        },
        {
            id: 58,
            question: "Which CSS property controls font size?",
            options: ["font-size", "text-size", "size", "font-height"],
            answer: "font-size"
        },
        {
            id: 59,
            question: "Which CSS property controls text alignment?",
            options: ["text-align", "align-text", "font-align", "text-position"],
            answer: "text-align"
        },
        {
            id: 60,
            question: "Which CSS property controls element width?",
            options: ["width", "size", "element-width", "box-width"],
            answer: "width"
        },

        {
            id: 61,
            question: "What does DOM stand for?",
            options: ["Document Object Model", "Data Object Model", "Document Oriented Method", "Digital Object Model"],
            answer: "Document Object Model"
        },
        {
            id: 62,
            question: "What does API stand for?",
            options: ["Application Programming Interface", "Application Program Internet", "Advanced Programming Input", "Application Process Interface"],
            answer: "Application Programming Interface"
        },
        {
            id: 63,
            question: "What HTTP method is commonly used to retrieve data?",
            options: ["GET", "POST", "PUT", "DELETE"],
            answer: "GET"
        },
        {
            id: 64,
            question: "What HTTP method is commonly used to submit new data?",
            options: ["POST", "GET", "READ", "FETCH"],
            answer: "POST"
        },
        {
            id: 65,
            question: "What HTTP method is commonly used to update a resource?",
            options: ["PUT", "GET", "FETCH", "READ"],
            answer: "PUT"
        },
        {
            id: 66,
            question: "What HTTP method is used to delete a resource?",
            options: ["DELETE", "REMOVE", "DROP", "CLEAR"],
            answer: "DELETE"
        },
        {
            id: 67,
            question: "What does HTTP status code 404 mean?",
            options: ["Not Found", "Success", "Server Error", "Unauthorized"],
            answer: "Not Found"
        },
        {
            id: 68,
            question: "What does HTTP status code 200 generally mean?",
            options: ["OK", "Not Found", "Forbidden", "Server Error"],
            answer: "OK"
        },
        {
            id: 69,
            question: "What does HTTP status code 500 indicate?",
            options: ["Internal Server Error", "OK", "Not Found", "Redirect"],
            answer: "Internal Server Error"
        },
        {
            id: 70,
            question: "What does HTTP status code 403 mean?",
            options: ["Forbidden", "OK", "Not Found", "Created"],
            answer: "Forbidden"
        },

        {
            id: 71,
            question: "What is Node.js?",
            options: ["JavaScript runtime", "Database", "Operating system", "Web browser"],
            answer: "JavaScript runtime"
        },
        {
            id: 72,
            question: "What is npm?",
            options: ["Node package manager", "Network programming machine", "New program module", "Node process manager only"],
            answer: "Node package manager"
        },
        {
            id: 73,
            question: "What is Express.js?",
            options: ["Web framework for Node.js", "Database", "Operating system", "Programming language"],
            answer: "Web framework for Node.js"
        },
        {
            id: 74,
            question: "What is MongoDB?",
            options: ["NoSQL database", "Operating system", "Browser", "Programming language"],
            answer: "NoSQL database"
        },
        {
            id: 75,
            question: "What type of database is MongoDB?",
            options: ["Document database", "Relational database only", "Graph database only", "Spreadsheet"],
            answer: "Document database"
        },
        {
            id: 76,
            question: "What format does MongoDB commonly store documents in conceptually?",
            options: ["BSON", "HTML", "CSV", "TXT"],
            answer: "BSON"
        },
        {
            id: 77,
            question: "What does CRUD stand for?",
            options: ["Create Read Update Delete", "Copy Read Upload Download", "Create Run Update Data", "Code Read Upload Delete"],
            answer: "Create Read Update Delete"
        },
        {
            id: 78,
            question: "Which CRUD operation corresponds to adding data?",
            options: ["Create", "Read", "Update", "Delete"],
            answer: "Create"
        },
        {
            id: 79,
            question: "Which CRUD operation corresponds to retrieving data?",
            options: ["Read", "Create", "Update", "Delete"],
            answer: "Read"
        },
        {
            id: 80,
            question: "Which CRUD operation corresponds to changing data?",
            options: ["Update", "Create", "Read", "Delete"],
            answer: "Update"
        },

        {
            id: 81,
            question: "Which layer of the OSI model handles routing?",
            options: ["Network", "Transport", "Session", "Physical"],
            answer: "Network"
        },
        {
            id: 82,
            question: "Which OSI layer handles reliable end-to-end delivery?",
            options: ["Transport", "Physical", "Presentation", "Application"],
            answer: "Transport"
        },
        {
            id: 83,
            question: "How many layers are in the OSI model?",
            options: ["7", "5", "6", "8"],
            answer: "7"
        },
        {
            id: 84,
            question: "Which protocol is used for secure web browsing?",
            options: ["HTTPS", "HTTP", "FTP", "SMTP"],
            answer: "HTTPS"
        },
        {
            id: 85,
            question: "Which protocol is commonly used for sending email?",
            options: ["SMTP", "HTTP", "FTP", "SSH"],
            answer: "SMTP"
        },
        {
            id: 86,
            question: "Which protocol is commonly used to transfer files?",
            options: ["FTP", "SMTP", "HTTP-only", "ARP"],
            answer: "FTP"
        },
        {
            id: 87,
            question: "What does SSH provide?",
            options: ["Secure remote access", "Email delivery", "Image compression", "Database storage"],
            answer: "Secure remote access"
        },
        {
            id: 88,
            question: "What is a MAC address?",
            options: ["Hardware network address", "Website address", "Email address", "Database address"],
            answer: "Hardware network address"
        },
        {
            id: 89,
            question: "Which protocol translates domain names to IP addresses?",
            options: ["DNS", "FTP", "SMTP", "SSH"],
            answer: "DNS"
        },
        {
            id: 90,
            question: "Which protocol automatically assigns IP addresses?",
            options: ["DHCP", "DNS", "HTTP", "FTP"],
            answer: "DHCP"
        },

        {
            id: 91,
            question: "What is an IPv4 address size?",
            options: ["32 bits", "64 bits", "128 bits", "16 bits"],
            answer: "32 bits"
        },
        {
            id: 92,
            question: "What is an IPv6 address size?",
            options: ["128 bits", "32 bits", "64 bits", "256 bits"],
            answer: "128 bits"
        },
        {
            id: 93,
            question: "Which device primarily forwards packets between networks?",
            options: ["Router", "Switch", "Hub", "Repeater"],
            answer: "Router"
        },
        {
            id: 94,
            question: "Which device operates primarily at the data link layer?",
            options: ["Switch", "Router", "Modem", "Repeater"],
            answer: "Switch"
        },
        {
            id: 95,
            question: "What is a subnet mask used for?",
            options: ["Separating network and host portions of an IP address", "Encrypting files", "Assigning passwords", "Compressing data"],
            answer: "Separating network and host portions of an IP address"
        },
        {
            id: 96,
            question: "What is localhost commonly represented by?",
            options: ["127.0.0.1", "8.8.8.8", "192.168.1.255", "255.255.255.255"],
            answer: "127.0.0.1"
        },
        {
            id: 97,
            question: "What is a port number used for?",
            options: ["Identifying network services", "Increasing storage", "Changing screen size", "Encrypting images"],
            answer: "Identifying network services"
        },
        {
            id: 98,
            question: "Which port is commonly associated with HTTP?",
            options: ["80", "21", "25", "110"],
            answer: "80"
        },
        {
            id: 99,
            question: "Which port is commonly associated with HTTPS?",
            options: ["443", "80", "22", "25"],
            answer: "443"
        },
        {
            id: 100,
            question: "Which port is commonly associated with SSH?",
            options: ["22", "80", "443", "53"],
            answer: "22"
        },

        {
            id: 101,
            question: "What is process scheduling?",
            options: ["Selecting processes for CPU execution", "Deleting processes", "Creating files", "Encrypting data"],
            answer: "Selecting processes for CPU execution"
        },
        {
            id: 102,
            question: "What is multitasking?",
            options: ["Running multiple tasks seemingly at the same time", "Using multiple keyboards", "Installing multiple monitors", "Deleting multiple files"],
            answer: "Running multiple tasks seemingly at the same time"
        },
        {
            id: 103,
            question: "What is a process?",
            options: ["Program in execution", "Stored file only", "CPU component", "Network cable"],
            answer: "Program in execution"
        },
        {
            id: 104,
            question: "What is a thread?",
            options: ["Smallest execution unit within a process", "Hard disk", "Network packet", "Database row"],
            answer: "Smallest execution unit within a process"
        },
        {
            id: 105,
            question: "What is deadlock?",
            options: ["Processes waiting indefinitely for resources", "Fast execution", "Successful scheduling", "Data backup"],
            answer: "Processes waiting indefinitely for resources"
        },
        {
            id: 106,
            question: "What is virtual memory?",
            options: ["Using storage to extend apparent memory", "A virtual keyboard", "A database", "A browser"],
            answer: "Using storage to extend apparent memory"
        },
        {
            id: 107,
            question: "What is paging?",
            options: ["Memory management technique", "Network routing", "Database sorting", "File encryption"],
            answer: "Memory management technique"
        },
        {
            id: 108,
            question: "What is a kernel?",
            options: ["Core component of an operating system", "Web browser", "Database", "Compiler"],
            answer: "Core component of an operating system"
        },
        {
            id: 109,
            question: "What is context switching?",
            options: ["Switching CPU between processes or threads", "Changing monitors", "Changing passwords", "Switching browsers"],
            answer: "Switching CPU between processes or threads"
        },
        {
            id: 110,
            question: "What is a system call?",
            options: ["Request from a program to the operating system", "Network packet", "Database query", "Web page"],
            answer: "Request from a program to the operating system"
        },

        {
            id: 111,
            question: "Which memory is closest to the CPU?",
            options: ["Cache", "Hard disk", "USB drive", "DVD"],
            answer: "Cache"
        },
        {
            id: 112,
            question: "What is cache memory used for?",
            options: ["Fast access to frequently used data", "Permanent file storage only", "Printing", "Network routing"],
            answer: "Fast access to frequently used data"
        },
        {
            id: 113,
            question: "What is CPU clock speed commonly measured in?",
            options: ["GHz", "GB", "Mbps", "Pixels"],
            answer: "GHz"
        },
        {
            id: 114,
            question: "What is a CPU core?",
            options: ["Independent processing unit within a CPU", "Storage drive", "Network port", "Database table"],
            answer: "Independent processing unit within a CPU"
        },
        {
            id: 115,
            question: "What is pipelining in CPU architecture?",
            options: ["Overlapping instruction stages", "Storing files", "Routing packets", "Compressing images"],
            answer: "Overlapping instruction stages"
        },
        {
            id: 116,
            question: "What is an instruction set?",
            options: ["Set of instructions a processor can execute", "Database schema", "Network protocol", "Web page"],
            answer: "Set of instructions a processor can execute"
        },
        {
            id: 117,
            question: "What is an ALU?",
            options: ["Arithmetic Logic Unit", "Advanced Logic Utility", "Application Logic Unit", "Arithmetic Link Unit"],
            answer: "Arithmetic Logic Unit"
        },
        {
            id: 118,
            question: "What does the ALU perform?",
            options: ["Arithmetic and logical operations", "File storage", "Network routing", "Printing"],
            answer: "Arithmetic and logical operations"
        },
        {
            id: 119,
            question: "What is a register?",
            options: ["Small high-speed CPU storage", "Hard disk", "Database", "Network cable"],
            answer: "Small high-speed CPU storage"
        },
        {
            id: 120,
            question: "What is an instruction pointer?",
            options: ["Register identifying the next instruction", "Network address", "Database key", "File pointer only"],
            answer: "Register identifying the next instruction"
        },

        {
            id: 121,
            question: "What is encapsulation in OOP?",
            options: ["Bundling data and methods together", "Creating multiple classes only", "Deleting objects", "Sorting arrays"],
            answer: "Bundling data and methods together"
        },
        {
            id: 122,
            question: "What is inheritance in OOP?",
            options: ["Creating a class based on another class", "Deleting a class", "Sorting objects", "Creating databases"],
            answer: "Creating a class based on another class"
        },
        {
            id: 123,
            question: "What is polymorphism?",
            options: ["Ability to use one interface in different forms", "Data encryption", "Database normalization", "Memory allocation"],
            answer: "Ability to use one interface in different forms"
        },
        {
            id: 124,
            question: "What is abstraction?",
            options: ["Hiding unnecessary implementation details", "Copying data", "Sorting data", "Deleting methods"],
            answer: "Hiding unnecessary implementation details"
        },
        {
            id: 125,
            question: "What is a class?",
            options: ["Blueprint for objects", "A database", "A network", "A CPU"],
            answer: "Blueprint for objects"
        },
        {
            id: 126,
            question: "What is an object?",
            options: ["Instance of a class", "A database table", "A compiler", "A network cable"],
            answer: "Instance of a class"
        },
        {
            id: 127,
            question: "What is a constructor?",
            options: ["Method used to initialize an object", "Method that deletes a class", "Database command", "Network protocol"],
            answer: "Method used to initialize an object"
        },
        {
            id: 128,
            question: "What is method overloading?",
            options: ["Same method name with different parameter lists", "Deleting methods", "Encrypting methods", "Changing databases"],
            answer: "Same method name with different parameter lists"
        },
        {
            id: 129,
            question: "What is method overriding?",
            options: ["Subclass providing its own implementation", "Deleting a method", "Creating a database", "Sorting methods"],
            answer: "Subclass providing its own implementation"
        },
        {
            id: 130,
            question: "Which concept promotes code reuse through parent-child classes?",
            options: ["Inheritance", "Encapsulation", "Abstraction", "Compilation"],
            answer: "Inheritance"
        },

        {
            id: 131,
            question: "What is recursion?",
            options: ["Function calling itself", "Function deleting itself", "Database joining", "Network routing"],
            answer: "Function calling itself"
        },
        {
            id: 132,
            question: "What must recursion generally have to stop?",
            options: ["Base case", "Compiler", "Database", "Router"],
            answer: "Base case"
        },
        {
            id: 133,
            question: "What is time complexity?",
            options: ["How running time grows with input size", "CPU temperature", "Network delay only", "File size"],
            answer: "How running time grows with input size"
        },
        {
            id: 134,
            question: "What is space complexity?",
            options: ["How memory usage grows with input size", "Disk capacity", "Screen size", "Network speed"],
            answer: "How memory usage grows with input size"
        },
        {
            id: 135,
            question: "What does Big O notation describe?",
            options: ["Asymptotic growth", "Exact CPU speed", "Database size", "Screen resolution"],
            answer: "Asymptotic growth"
        },
        {
            id: 136,
            question: "Which complexity is generally faster for large input?",
            options: ["O(log n)", "O(n²)", "O(2ⁿ)", "O(n!)"],
            answer: "O(log n)"
        },
        {
            id: 137,
            question: "What is hashing?",
            options: ["Mapping data to a hash value", "Sorting only", "Encrypting with a password only", "Compressing images"],
            answer: "Mapping data to a hash value"
        },
        {
            id: 138,
            question: "What is a hash table?",
            options: ["Data structure using hash values for lookup", "Database server", "Network protocol", "Tree traversal"],
            answer: "Data structure using hash values for lookup"
        },
        {
            id: 139,
            question: "What is a hash collision?",
            options: ["Two keys producing the same hash location", "Two CPUs failing", "Two databases joining", "Two networks connecting"],
            answer: "Two keys producing the same hash location"
        },
        {
            id: 140,
            question: "What is a linked list advantage over an array?",
            options: ["Easy insertion and deletion at known positions", "Always faster random access", "Requires no memory", "Uses no pointers"],
            answer: "Easy insertion and deletion at known positions"
        },

        {
            id: 141,
            question: "What is machine learning training data?",
            options: ["Data used to train a model", "Data used only for display", "Network packets", "Database indexes"],
            answer: "Data used to train a model"
        },
        {
            id: 142,
            question: "What is a feature in machine learning?",
            options: ["Input variable used by a model", "Final prediction only", "Database password", "Network address"],
            answer: "Input variable used by a model"
        },
        {
            id: 143,
            question: "What is a label in supervised learning?",
            options: ["Known target value", "Network address", "Database key", "CPU instruction"],
            answer: "Known target value"
        },
        {
            id: 144,
            question: "What is classification?",
            options: ["Predicting categories", "Predicting only continuous numbers", "Sorting files", "Encrypting data"],
            answer: "Predicting categories"
        },
        {
            id: 145,
            question: "What is regression in machine learning?",
            options: ["Predicting numerical values", "Predicting categories only", "Deleting data", "Sorting data"],
            answer: "Predicting numerical values"
        },
        {
            id: 146,
            question: "What is overfitting?",
            options: ["Model learns training data too closely", "Model has no data", "Model cannot compile", "Network becomes slow"],
            answer: "Model learns training data too closely"
        },
        {
            id: 147,
            question: "What is underfitting?",
            options: ["Model is too simple to capture patterns", "Model memorizes everything", "Database has duplicate rows", "Network is encrypted"],
            answer: "Model is too simple to capture patterns"
        },
        {
            id: 148,
            question: "What is a neural network inspired by?",
            options: ["Biological nervous systems", "Computer keyboards", "Databases", "Network routers"],
            answer: "Biological nervous systems"
        },
        {
            id: 149,
            question: "What is an epoch in machine learning?",
            options: ["One complete pass through training data", "One database query", "One network packet", "One CPU cycle"],
            answer: "One complete pass through training data"
        },
        {
            id: 150,
            question: "What is model accuracy?",
            options: ["Proportion of correct predictions", "Training speed", "Memory size", "Network speed"],
            answer: "Proportion of correct predictions"
        },

        {
            id: 151,
            question: "What is supervised learning?",
            options: ["Learning from labeled data", "Learning without data", "Learning from hardware", "Learning only from networks"],
            answer: "Learning from labeled data"
        },
        {
            id: 152,
            question: "What is unsupervised learning?",
            options: ["Learning patterns from unlabeled data", "Learning from labeled answers only", "Learning from CPUs", "Learning from keyboards"],
            answer: "Learning patterns from unlabeled data"
        },
        {
            id: 153,
            question: "What is clustering?",
            options: ["Grouping similar data points", "Sorting numbers only", "Deleting duplicates", "Encrypting data"],
            answer: "Grouping similar data points"
        },
        {
            id: 154,
            question: "What is reinforcement learning based on?",
            options: ["Rewards and penalties", "Only labeled images", "SQL queries", "Network packets"],
            answer: "Rewards and penalties"
        },
        {
            id: 155,
            question: "What is NLP mainly concerned with?",
            options: ["Human language", "Computer hardware", "Network cables", "Database storage"],
            answer: "Human language"
        },
        {
            id: 156,
            question: "What is tokenization in NLP?",
            options: ["Breaking text into smaller units", "Encrypting text", "Deleting text", "Printing text"],
            answer: "Breaking text into smaller units"
        },
        {
            id: 157,
            question: "What is sentiment analysis?",
            options: ["Determining opinion or emotion in text", "Sorting files", "Network analysis", "Image compression"],
            answer: "Determining opinion or emotion in text"
        },
        {
            id: 158,
            question: "What is computer vision mainly concerned with?",
            options: ["Understanding images and video", "Database tables", "Network protocols", "Text files only"],
            answer: "Understanding images and video"
        },
        {
            id: 159,
            question: "What is image classification?",
            options: ["Assigning an image to a category", "Compressing an image", "Deleting an image", "Printing an image"],
            answer: "Assigning an image to a category"
        },
        {
            id: 160,
            question: "What is object detection?",
            options: ["Finding objects and their locations in images", "Deleting objects", "Compressing images", "Changing image colors only"],
            answer: "Finding objects and their locations in images"
        },

        {
            id: 161,
            question: "What is encryption used for in cybersecurity?",
            options: ["Protecting confidentiality of data", "Increasing CPU speed", "Sorting files", "Creating databases"],
            answer: "Protecting confidentiality of data"
        },
        {
            id: 162,
            question: "What is authentication?",
            options: ["Verifying identity", "Granting every permission", "Encrypting files only", "Deleting accounts"],
            answer: "Verifying identity"
        },
        {
            id: 163,
            question: "What is authorization?",
            options: ["Determining what an authenticated user can access", "Verifying identity only", "Creating passwords", "Compressing data"],
            answer: "Determining what an authenticated user can access"
        },
        {
            id: 164,
            question: "What is a brute-force attack?",
            options: ["Trying many possible passwords or keys", "Encrypting data", "Backing up files", "Updating software"],
            answer: "Trying many possible passwords or keys"
        },
        {
            id: 165,
            question: "What is a DDoS attack?",
            options: ["Overwhelming a service with traffic", "Stealing a password through email", "Encrypting a file", "Backing up a database"],
            answer: "Overwhelming a service with traffic"
        },
        {
            id: 166,
            question: "What is SQL injection?",
            options: ["Injecting malicious SQL through input", "Encrypting SQL", "Backing up SQL", "Installing SQL"],
            answer: "Injecting malicious SQL through input"
        },
        {
            id: 167,
            question: "What is XSS?",
            options: ["Cross-Site Scripting", "Extra Secure System", "External Server Security", "Cross Server Storage"],
            answer: "Cross-Site Scripting"
        },
        {
            id: 168,
            question: "What is a security patch?",
            options: ["Software update fixing security issues", "Hardware replacement", "Database table", "Network cable"],
            answer: "Software update fixing security issues"
        },
        {
            id: 169,
            question: "What is social engineering?",
            options: ["Manipulating people to reveal information", "Building social networks", "Programming social media", "Creating databases"],
            answer: "Manipulating people to reveal information"
        },
        {
            id: 170,
            question: "What is the principle of least privilege?",
            options: ["Give users only required permissions", "Give users all permissions", "Remove all passwords", "Allow anonymous access"],
            answer: "Give users only required permissions"
        },

        {
            id: 171,
            question: "What is cloud computing commonly divided into?",
            options: ["IaaS, PaaS and SaaS", "HTML, CSS and JS", "CPU, RAM and ROM", "LAN, MAN and PAN"],
            answer: "IaaS, PaaS and SaaS"
        },
        {
            id: 172,
            question: "What does SaaS stand for?",
            options: ["Software as a Service", "System as a Service", "Storage as a System", "Software and Storage"],
            answer: "Software as a Service"
        },
        {
            id: 173,
            question: "What does PaaS stand for?",
            options: ["Platform as a Service", "Program as a System", "Platform and Storage", "Processing as a Service"],
            answer: "Platform as a Service"
        },
        {
            id: 174,
            question: "What does IaaS stand for?",
            options: ["Infrastructure as a Service", "Internet as a System", "Information as a Service", "Infrastructure and Storage"],
            answer: "Infrastructure as a Service"
        },
        {
            id: 175,
            question: "What is scalability?",
            options: ["Ability to handle increasing workload", "Deleting data", "Encrypting files", "Changing screen size"],
            answer: "Ability to handle increasing workload"
        },
        {
            id: 176,
            question: "What is cloud elasticity?",
            options: ["Ability to dynamically adjust resources", "Physical stretching of hardware", "Database normalization", "Network encryption"],
            answer: "Ability to dynamically adjust resources"
        },
        {
            id: 177,
            question: "What is a container in software?",
            options: ["Lightweight isolated environment for applications", "Physical storage box", "Database table", "Network cable"],
            answer: "Lightweight isolated environment for applications"
        },
        {
            id: 178,
            question: "What is Docker?",
            options: ["Containerization platform", "Database language", "Operating system", "Web browser"],
            answer: "Containerization platform"
        },
        {
            id: 179,
            question: "What is an API endpoint?",
            options: ["Specific location where an API can be accessed", "CPU register", "Database password", "Network cable"],
            answer: "Specific location where an API can be accessed"
        },
        {
            id: 180,
            question: "What is REST?",
            options: ["Architectural style for web services", "Database language", "Operating system", "Programming language"],
            answer: "Architectural style for web services"
        },

        {
            id: 181,
            question: "What does REST commonly use for data representation?",
            options: ["JSON", "EXE", "DLL", "BIOS"],
            answer: "JSON"
        },
        {
            id: 182,
            question: "What is version control used for?",
            options: ["Tracking changes in files and code", "Increasing RAM", "Routing traffic", "Creating hardware"],
            answer: "Tracking changes in files and code"
        },
        {
            id: 183,
            question: "Which Git command creates a new repository?",
            options: ["git init", "git start", "git create", "git new"],
            answer: "git init"
        },
        {
            id: 184,
            question: "Which Git command downloads a repository?",
            options: ["git clone", "git download", "git copy", "git fetchall"],
            answer: "git clone"
        },
        {
            id: 185,
            question: "Which Git command records staged changes?",
            options: ["git commit", "git save", "git record", "git store"],
            answer: "git commit"
        },
        {
            id: 186,
            question: "Which Git command uploads commits to a remote repository?",
            options: ["git push", "git upload", "git send", "git publish"],
            answer: "git push"
        },
        {
            id: 187,
            question: "Which Git command retrieves remote changes?",
            options: ["git pull", "git download", "git receive", "git update"],
            answer: "git pull"
        },
        {
            id: 188,
            question: "What is a Git branch?",
            options: ["Independent line of development", "Database table", "Network route", "Computer port"],
            answer: "Independent line of development"
        },
        {
            id: 189,
            question: "What is a merge in Git?",
            options: ["Combining changes from branches", "Deleting branches", "Creating a database", "Compressing files"],
            answer: "Combining changes from branches"
        },
        {
            id: 190,
            question: "What is a merge conflict?",
            options: ["Git cannot automatically reconcile changes", "Network failure", "Database failure", "Compiler error"],
            answer: "Git cannot automatically reconcile changes"
        },

        {
            id: 191,
            question: "What is a compiler error?",
            options: ["Error preventing successful compilation", "Network error", "Database row", "Hardware cable"],
            answer: "Error preventing successful compilation"
        },
        {
            id: 192,
            question: "What is a runtime error?",
            options: ["Error occurring during program execution", "Error in keyboard", "Database table", "Network cable"],
            answer: "Error occurring during program execution"
        },
        {
            id: 193,
            question: "What is a logical error?",
            options: ["Program runs but produces incorrect results", "Program cannot start", "Hardware failure", "Network failure"],
            answer: "Program runs but produces incorrect results"
        },
        {
            id: 194,
            question: "What is unit testing?",
            options: ["Testing individual components", "Testing an entire network", "Testing hardware cables", "Testing only databases"],
            answer: "Testing individual components"
        },
        {
            id: 195,
            question: "What is integration testing?",
            options: ["Testing interactions between components", "Testing one variable", "Testing hardware only", "Testing a keyboard"],
            answer: "Testing interactions between components"
        },
        {
            id: 196,
            question: "What is debugging used for?",
            options: ["Finding and fixing software problems", "Increasing storage", "Creating hardware", "Routing networks"],
            answer: "Finding and fixing software problems"
        },
        {
            id: 197,
            question: "What is software testing?",
            options: ["Evaluating software behavior and correctness", "Creating CPUs", "Routing packets", "Formatting disks"],
            answer: "Evaluating software behavior and correctness"
        },
        {
            id: 198,
            question: "What is an IDE?",
            options: ["Integrated Development Environment", "Internet Development Engine", "Integrated Data Editor", "Internal Development Extension"],
            answer: "Integrated Development Environment"
        },
        {
            id: 199,
            question: "Which is an example of an IDE/editor?",
            options: ["Visual Studio Code", "Google Search", "Windows Explorer", "YouTube"],
            answer: "Visual Studio Code"
        },
        {
            id: 200,
            question: "What is software documentation?",
            options: ["Information explaining software and its use", "A CPU", "A network cable", "A database server"],
            answer: "Information explaining software and its use"
        }
    ],


    // ========================================================
    // ROUND 3 - 100 CHALLENGE QUESTIONS
    // ========================================================
    // IMPORTANT:
    // The four options below are intentionally present.
    // app.js hides them until SHOW OPTIONS is clicked.
    // ========================================================

    round3: [

        {
            id: 1,
            question: "What is the output of: console.log(typeof null);",
            options: ["object", "null", "undefined", "boolean"],
            answer: "object"
        },
        {
            id: 2,
            question: "What is the output of: console.log(2 + '2');",
            options: ["22", "4", "undefined", "NaN"],
            answer: "22"
        },
        {
            id: 3,
            question: "What is the output of: console.log(2 == '2');",
            options: ["true", "false", "undefined", "error"],
            answer: "true"
        },
        {
            id: 4,
            question: "What is the output of: console.log(2 === '2');",
            options: ["false", "true", "undefined", "error"],
            answer: "false"
        },
        {
            id: 5,
            question: "Which JavaScript value represents an intentionally empty value?",
            options: ["null", "undefined", "NaN", "false"],
            answer: "null"
        },
        {
            id: 6,
            question: "Which JavaScript value represents a variable that has been declared but not assigned?",
            options: ["undefined", "null", "false", "NaN"],
            answer: "undefined"
        },
        {
            id: 7,
            question: "What is the output of: console.log(10 % 3);",
            options: ["1", "3", "0", "10"],
            answer: "1"
        },
        {
            id: 8,
            question: "What is the output of: console.log(2 ** 3);",
            options: ["8", "6", "9", "5"],
            answer: "8"
        },
        {
            id: 9,
            question: "Which keyword prevents reassignment of a JavaScript variable?",
            options: ["const", "let", "var", "static"],
            answer: "const"
        },
        {
            id: 10,
            question: "Which JavaScript method converts JSON text into an object?",
            options: ["JSON.parse()", "JSON.stringify()", "JSON.convert()", "JSON.object()"],
            answer: "JSON.parse()"
        },

        {
            id: 11,
            question: "Which JavaScript method converts an object into JSON text?",
            options: ["JSON.stringify()", "JSON.parse()", "JSON.convert()", "JSON.text()"],
            answer: "JSON.stringify()"
        },
        {
            id: 12,
            question: "What does Array.isArray([]) return?",
            options: ["true", "false", "undefined", "null"],
            answer: "true"
        },
        {
            id: 13,
            question: "What is the first index of a JavaScript array?",
            options: ["0", "1", "-1", "Depends on array"],
            answer: "0"
        },
        {
            id: 14,
            question: "What does 'use strict' enable in JavaScript?",
            options: ["Strict mode", "Debug mode", "HTML mode", "Database mode"],
            answer: "Strict mode"
        },
        {
            id: 15,
            question: "Which method creates a new array by transforming each element?",
            options: ["map()", "filter()", "reduce()", "find()"],
            answer: "map()"
        },
        {
            id: 16,
            question: "Which method creates an array containing elements that pass a condition?",
            options: ["filter()", "map()", "reduce()", "find()"],
            answer: "filter()"
        },
        {
            id: 17,
            question: "Which method reduces an array to a single value?",
            options: ["reduce()", "map()", "filter()", "slice()"],
            answer: "reduce()"
        },
        {
            id: 18,
            question: "Which method returns the first matching element?",
            options: ["find()", "filter()", "search()", "first()"],
            answer: "find()"
        },
        {
            id: 19,
            question: "What is a closure in JavaScript?",
            options: ["Function retaining access to its lexical scope", "A closed browser", "A private database", "A loop"],
            answer: "Function retaining access to its lexical scope"
        },
        {
            id: 20,
            question: "What is event bubbling?",
            options: ["Event propagation from target toward ancestors", "Creating browser events", "Deleting events", "Stopping all events"],
            answer: "Event propagation from target toward ancestors"
        },

        {
            id: 21,
            question: "What does SQL GROUP BY primarily do?",
            options: ["Groups rows with common values", "Sorts all rows", "Deletes duplicates", "Creates tables"],
            answer: "Groups rows with common values"
        },
        {
            id: 22,
            question: "Which SQL clause filters groups after GROUP BY?",
            options: ["HAVING", "WHERE", "FILTER", "GROUP"],
            answer: "HAVING"
        },
        {
            id: 23,
            question: "Why is WHERE generally evaluated before GROUP BY?",
            options: ["It filters individual rows before grouping", "It sorts rows", "It creates groups", "It deletes tables"],
            answer: "It filters individual rows before grouping"
        },
        {
            id: 24,
            question: "Which SQL JOIN returns all rows from the left table?",
            options: ["LEFT JOIN", "INNER JOIN", "RIGHT JOIN", "CROSS JOIN"],
            answer: "LEFT JOIN"
        },
        {
            id: 25,
            question: "What does a CROSS JOIN produce?",
            options: ["Cartesian product", "Only matching rows", "Only unmatched rows", "Sorted rows"],
            answer: "Cartesian product"
        },
        {
            id: 26,
            question: "What is a composite key?",
            options: ["Key made from multiple columns", "Encrypted key", "Foreign key only", "Temporary key"],
            answer: "Key made from multiple columns"
        },
        {
            id: 27,
            question: "What is a candidate key?",
            options: ["Minimal set of attributes that uniquely identifies a row", "Any foreign key", "A duplicate column", "A temporary key"],
            answer: "Minimal set of attributes that uniquely identifies a row"
        },
        {
            id: 28,
            question: "What does referential integrity protect?",
            options: ["Validity of relationships between tables", "CPU speed", "Network bandwidth", "File compression"],
            answer: "Validity of relationships between tables"
        },
        {
            id: 29,
            question: "What is a transaction rollback used for?",
            options: ["Undoing transaction changes", "Sorting rows", "Creating indexes", "Backing up the OS"],
            answer: "Undoing transaction changes"
        },
        {
            id: 30,
            question: "What does the isolation property of ACID address?",
            options: ["Concurrent transactions not interfering improperly", "Data encryption", "Backup storage", "Table size"],
            answer: "Concurrent transactions not interfering improperly"
        },

        {
            id: 31,
            question: "Which data structure is commonly used to implement a priority queue?",
            options: ["Heap", "Stack", "Array only", "Graph"],
            answer: "Heap"
        },
        {
            id: 32,
            question: "What is the typical time complexity of heap insertion?",
            options: ["O(log n)", "O(n)", "O(1)", "O(n²)"],
            answer: "O(log n)"
        },
        {
            id: 33,
            question: "What is the typical time complexity of accessing an array element by index?",
            options: ["O(1)", "O(log n)", "O(n)", "O(n²)"],
            answer: "O(1)"
        },
        {
            id: 34,
            question: "What is the worst-case complexity of quicksort?",
            options: ["O(n²)", "O(n)", "O(log n)", "O(1)"],
            answer: "O(n²)"
        },
        {
            id: 35,
            question: "What is the average complexity of quicksort?",
            options: ["O(n log n)", "O(n²)", "O(n)", "O(log n)"],
            answer: "O(n log n)"
        },
        {
            id: 36,
            question: "What is the worst-case complexity of merge sort?",
            options: ["O(n log n)", "O(n²)", "O(n)", "O(log n)"],
            answer: "O(n log n)"
        },
        {
            id: 37,
            question: "Which sorting algorithm is stable and has O(n log n) worst-case complexity?",
            options: ["Merge Sort", "Quick Sort", "Selection Sort", "Bubble Sort"],
            answer: "Merge Sort"
        },
        {
            id: 38,
            question: "What is the space complexity of a typical recursive DFS?",
            options: ["O(V)", "O(1)", "O(log V) always", "O(E²)"],
            answer: "O(V)"
        },
        {
            id: 39,
            question: "Which algorithm finds shortest paths with non-negative edge weights?",
            options: ["Dijkstra's Algorithm", "DFS", "Binary Search", "Bubble Sort"],
            answer: "Dijkstra's Algorithm"
        },
        {
            id: 40,
            question: "Which algorithm is commonly used for minimum spanning trees?",
            options: ["Kruskal's Algorithm", "Binary Search", "DFS only", "KMP"],
            answer: "Kruskal's Algorithm"
        },

        {
            id: 41,
            question: "What is a race condition?",
            options: ["Result depends on timing of concurrent operations", "Fast CPU execution", "Network delay", "Database sorting"],
            answer: "Result depends on timing of concurrent operations"
        },
        {
            id: 42,
            question: "What is a mutex used for?",
            options: ["Mutual exclusion", "Memory expansion", "Network routing", "Data compression"],
            answer: "Mutual exclusion"
        },
        {
            id: 43,
            question: "What is starvation in operating systems?",
            options: ["Process waits indefinitely for resources or CPU", "System shutdown", "Memory overflow", "Disk failure"],
            answer: "Process waits indefinitely for resources or CPU"
        },
        {
            id: 44,
            question: "Which scheduling algorithm gives each process a time slice?",
            options: ["Round Robin", "FCFS", "Shortest Job First", "Priority only"],
            answer: "Round Robin"
        },
        {
            id: 45,
            question: "What does FCFS stand for?",
            options: ["First Come First Served", "First CPU First Scheduled", "Fast Computer File System", "First Cycle First Service"],
            answer: "First Come First Served"
        },
        {
            id: 46,
            question: "What is thrashing?",
            options: ["Excessive paging activity", "CPU overheating only", "Network flooding", "Database locking"],
            answer: "Excessive paging activity"
        },
        {
            id: 47,
            question: "What is fragmentation in memory?",
            options: ["Unused memory divided into small pieces", "Encrypted memory", "Memory backup", "CPU cache"],
            answer: "Unused memory divided into small pieces"
        },
        {
            id: 48,
            question: "What is a page fault?",
            options: ["Required page is not currently in physical memory", "CPU failure", "Network error", "Database error"],
            answer: "Required page is not currently in physical memory"
        },
        {
            id: 49,
            question: "What is a semaphore used for?",
            options: ["Process synchronization", "Data compression", "Network addressing", "File storage"],
            answer: "Process synchronization"
        },
        {
            id: 50,
            question: "What is kernel mode?",
            options: ["Privileged execution mode", "Browser mode", "Database mode", "User interface mode"],
            answer: "Privileged execution mode"
        },

        {
            id: 51,
            question: "Which OSI layer handles MAC addresses?",
            options: ["Data Link", "Network", "Transport", "Application"],
            answer: "Data Link"
        },
        {
            id: 52,
            question: "Which OSI layer is responsible for end-to-end communication?",
            options: ["Transport", "Network", "Session", "Physical"],
            answer: "Transport"
        },
        {
            id: 53,
            question: "What protocol maps IPv4 addresses to MAC addresses?",
            options: ["ARP", "DNS", "DHCP", "ICMP"],
            answer: "ARP"
        },
        {
            id: 54,
            question: "What protocol is commonly used by ping?",
            options: ["ICMP", "TCP", "FTP", "SMTP"],
            answer: "ICMP"
        },
        {
            id: 55,
            question: "Which transport protocol provides reliable ordered delivery?",
            options: ["TCP", "UDP", "IP", "ICMP"],
            answer: "TCP"
        },
        {
            id: 56,
            question: "Which transport protocol is connectionless?",
            options: ["UDP", "TCP", "SSH", "HTTP"],
            answer: "UDP"
        },
        {
            id: 57,
            question: "What is NAT used for?",
            options: ["Translating network addresses", "Encrypting files", "Sorting packets", "Compressing data"],
            answer: "Translating network addresses"
        },
        {
            id: 58,
            question: "What is a default gateway?",
            options: ["Device used to reach other networks", "DNS server only", "Web server", "Database server"],
            answer: "Device used to reach other networks"
        },
        {
            id: 59,
            question: "What is packet loss?",
            options: ["Packets failing to reach their destination", "Faster networking", "Data encryption", "Data compression"],
            answer: "Packets failing to reach their destination"
        },
        {
            id: 60,
            question: "What is jitter?",
            options: ["Variation in packet delay", "Packet size", "Network address", "Encryption key"],
            answer: "Variation in packet delay"
        },

        {
            id: 61,
            question: "What is asymmetric encryption?",
            options: ["Uses a public and private key pair", "Uses only one key", "Uses no keys", "Uses passwords only"],
            answer: "Uses a public and private key pair"
        },
        {
            id: 62,
            question: "What is symmetric encryption?",
            options: ["Uses the same secret key for encryption and decryption", "Uses two public keys", "Uses no key", "Uses only certificates"],
            answer: "Uses the same secret key for encryption and decryption"
        },
        {
            id: 63,
            question: "What is a digital signature primarily used for?",
            options: ["Authenticity and integrity", "Increasing storage", "Compressing files", "Changing IP addresses"],
            answer: "Authenticity and integrity"
        },
        {
            id: 64,
            question: "What is a certificate authority?",
            options: ["Entity that issues digital certificates", "Firewall device", "Database server", "Password manager"],
            answer: "Entity that issues digital certificates"
        },
        {
            id: 65,
            question: "What is a zero-day vulnerability?",
            options: ["Previously unknown or unpatched security vulnerability", "A vulnerability fixed for years", "A failed backup", "A network outage"],
            answer: "Previously unknown or unpatched security vulnerability"
        },
        {
            id: 66,
            question: "What is salting a password?",
            options: ["Adding random data before hashing", "Encrypting with a public key", "Deleting the password", "Sending the password by email"],
            answer: "Adding random data before hashing"
        },
        {
            id: 67,
            question: "Why should passwords generally be hashed?",
            options: ["To avoid storing passwords directly", "To make passwords shorter", "To send them faster", "To remove authentication"],
            answer: "To avoid storing passwords directly"
        },
        {
            id: 68,
            question: "What security property does hashing mainly provide?",
            options: ["Integrity verification", "Network routing", "CPU acceleration", "Screen protection"],
            answer: "Integrity verification"
        },
        {
            id: 69,
            question: "What is privilege escalation?",
            options: ["Gaining higher access privileges than authorized", "Changing a username", "Updating software", "Backing up files"],
            answer: "Gaining higher access privileges than authorized"
        },
        {
            id: 70,
            question: "What is a man-in-the-middle attack?",
            options: ["Attacker secretly intercepts communication", "Attacker deletes a keyboard", "Attacker formats a disk", "Attacker updates software"],
            answer: "Attacker secretly intercepts communication"
        },

        {
            id: 71,
            question: "What is overfitting in machine learning?",
            options: ["Model performs well on training data but poorly on unseen data", "Model has no training data", "Model is always accurate", "Model cannot store data"],
            answer: "Model performs well on training data but poorly on unseen data"
        },
        {
            id: 72,
            question: "What is cross-validation used for?",
            options: ["Evaluating model generalization", "Encrypting data", "Sorting datasets", "Creating networks"],
            answer: "Evaluating model generalization"
        },
        {
            id: 73,
            question: "What is precision in classification?",
            options: ["Fraction of predicted positives that are actually positive", "Fraction of all positives detected", "Total accuracy only", "Number of training examples"],
            answer: "Fraction of predicted positives that are actually positive"
        },
        {
            id: 74,
            question: "What is recall in classification?",
            options: ["Fraction of actual positives correctly identified", "Fraction of predicted positives that are correct", "Total number of features", "Training accuracy only"],
            answer: "Fraction of actual positives correctly identified"
        },
        {
            id: 75,
            question: "What does a confusion matrix summarize?",
            options: ["Classification prediction results", "Network traffic", "Database rows", "CPU instructions"],
            answer: "Classification prediction results"
        },
        {
            id: 76,
            question: "What is a false positive?",
            options: ["Negative case incorrectly predicted as positive", "Positive case correctly predicted", "Positive case missed", "Negative case correctly predicted"],
            answer: "Negative case incorrectly predicted as positive"
        },
        {
            id: 77,
            question: "What is a false negative?",
            options: ["Positive case incorrectly predicted as negative", "Negative case incorrectly predicted as positive", "Correct positive", "Correct negative"],
            answer: "Positive case incorrectly predicted as negative"
        },
        {
            id: 78,
            question: "What is gradient descent used for?",
            options: ["Optimizing model parameters", "Sorting arrays", "Encrypting files", "Routing packets"],
            answer: "Optimizing model parameters"
        },
        {
            id: 79,
            question: "What is a hyperparameter?",
            options: ["Parameter configured before or outside model training", "Output label", "Database key", "Network address"],
            answer: "Parameter configured before or outside model training"
        },
        {
            id: 80,
            question: "What is an activation function in a neural network?",
            options: ["Function that introduces non-linearity", "Database function", "Network protocol", "Sorting algorithm"],
            answer: "Function that introduces non-linearity"
        },

        {
            id: 81,
            question: "What is the purpose of an index in a database?",
            options: ["Speed up data retrieval", "Encrypt every row", "Delete duplicates automatically", "Increase CPU speed"],
            answer: "Speed up data retrieval"
        },
        {
            id: 82,
            question: "What is the trade-off of database indexes?",
            options: ["Extra storage and write overhead", "No storage required", "They always slow reads", "They remove primary keys"],
            answer: "Extra storage and write overhead"
        },
        {
            id: 83,
            question: "What is a database view?",
            options: ["Virtual table based on a query", "Physical hard disk", "Database backup", "Primary key"],
            answer: "Virtual table based on a query"
        },
        {
            id: 84,
            question: "What is a stored procedure?",
            options: ["Predefined database-side program", "Operating system process", "Web browser", "Network packet"],
            answer: "Predefined database-side program"
        },
        {
            id: 85,
            question: "What is a trigger in a database?",
            options: ["Action automatically executed in response to an event", "Manual backup", "Primary key", "Network connection"],
            answer: "Action automatically executed in response to an event"
        },
        {
            id: 86,
            question: "What does CAP theorem discuss?",
            options: ["Consistency, Availability and Partition tolerance", "CPU, Application and Process", "Cloud, API and Protocol", "Cache, Access and Permission"],
            answer: "Consistency, Availability and Partition tolerance"
        },
        {
            id: 87,
            question: "What is database sharding?",
            options: ["Splitting data across multiple servers", "Encrypting tables", "Deleting indexes", "Backing up one table"],
            answer: "Splitting data across multiple servers"
        },
        {
            id: 88,
            question: "What is replication in databases?",
            options: ["Maintaining copies of data on multiple systems", "Deleting data", "Sorting rows", "Compressing tables"],
            answer: "Maintaining copies of data on multiple systems"
        },
        {
            id: 89,
            question: "What is eventual consistency?",
            options: ["Replicas become consistent after some time", "All replicas are instantly identical", "No data is replicated", "Data is never consistent"],
            answer: "Replicas become consistent after some time"
        },
        {
            id: 90,
            question: "What is a NoSQL database generally designed to provide?",
            options: ["Flexible data models and scalable storage", "Only fixed relational tables", "Only spreadsheets", "Only image storage"],
            answer: "Flexible data models and scalable storage"
        },

        {
            id: 91,
            question: "What is a RESTful API expected to be?",
            options: ["Stateless between requests", "Dependent on one permanent session", "A database only", "A programming language"],
            answer: "Stateless between requests"
        },
        {
            id: 92,
            question: "What does stateless mean in REST?",
            options: ["Each request contains the information needed to process it", "Server stores every request forever", "No data can be sent", "Client cannot authenticate"],
            answer: "Each request contains the information needed to process it"
        },
        {
            id: 93,
            question: "What is middleware in a web server?",
            options: ["Software that processes requests between stages", "Database storage", "CPU cache", "Network cable"],
            answer: "Software that processes requests between stages"
        },
        {
            id: 94,
            question: "What is CORS?",
            options: ["Cross-Origin Resource Sharing", "Computer Origin Routing System", "Cross Object Request Service", "Client-Origin Response Security"],
            answer: "Cross-Origin Resource Sharing"
        },
        {
            id: 95,
            question: "Why is CORS relevant to web applications?",
            options: ["It controls cross-origin browser requests", "It encrypts databases", "It sorts JavaScript", "It increases RAM"],
            answer: "It controls cross-origin browser requests"
        },
        {
            id: 96,
            question: "What is JWT commonly used for?",
            options: ["Token-based authentication", "Image compression", "Database indexing", "CPU scheduling"],
            answer: "Token-based authentication"
        },
        {
            id: 97,
            question: "What does JWT stand for?",
            options: ["JSON Web Token", "Java Web Transfer", "JSON Web Transfer", "JavaScript Web Token"],
            answer: "JSON Web Token"
        },
        {
            id: 98,
            question: "Which three parts make up a typical JWT?",
            options: ["Header, Payload, Signature", "User, Password, Token", "Request, Response, Server", "HTML, CSS, JS"],
            answer: "Header, Payload, Signature"
        },
        {
            id: 99,
            question: "What is asynchronous programming useful for?",
            options: ["Handling operations without blocking execution unnecessarily", "Deleting data", "Increasing CPU hardware", "Creating physical networks"],
            answer: "Handling operations without blocking execution unnecessarily"
        },
        {
            id: 100,
            question: "What is a Promise in JavaScript?",
            options: ["Object representing eventual completion or failure of an async operation", "Database table", "HTML element", "Network cable"],
            answer: "Object representing eventual completion or failure of an async operation"
        }
    ]
};


// ============================================================
// QUESTION BANK VALIDATION
// ============================================================

console.log("TECHNOVA 2K26 Question Bank Loaded");
console.log("Round 1:", quizQuestions.round1.length, "questions");
console.log("Round 2:", quizQuestions.round2.length, "questions");
console.log("Round 3:", quizQuestions.round3.length, "questions");
console.log(
    "Total:",
    quizQuestions.round1.length +
    quizQuestions.round2.length +
    quizQuestions.round3.length,
    "questions"
);