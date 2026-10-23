// ============================================================
// TECHNOVA 2K26 - TECH QUIZ APPLICATION
// FINAL REVISED VERSION
//
// ROUND 1 = 275 QUESTIONS
// ROUND 2 = 200 QUESTIONS
// ROUND 3 = 100 QUESTIONS
//
// ROUND 3:
// Direct correct answer = 3 marks
// Reveal options + correct answer = 2 marks
// Wrong answer = 0 marks
//
// SCORE IS MAINTAINED MANUALLY
// ============================================================


let currentRound = 1;

let currentQuestionId = null;

let currentQuestionObj = null;


let timerInterval = null;

let timeLeft = 30;

let defaultRoundTime = 30;


let audioContextUnlocked = false;

let synthesisVoice = null;

let isOptionAnswered = false;


// ============================================================
// ROUND 3 STATE
// ============================================================

let round3OptionsRevealed = false;


// ============================================================
// QUESTION STATUS
// ============================================================

const questionStatus = {

    1: {},

    2: {},

    3: {}

};


// ============================================================
// FUN QUOTES
// ============================================================

const funnyQuotes = [

    "Brain cells loading...",

    "No panicking! You got this!",

    "Think fast and stay calm!",

    "Is this easy or tricky?",

    "Activate your backbench brain!",

    "Every question is a new chance!",

    "Fast thinking, sharp answers!",

    "Your team is counting on you!"

];


// ============================================================
// CORRECT COMMENTARIES
// ============================================================

const correctCommentaries = [

    "Brilliant answer team!",

    "Excellent! Absolutely correct!",

    "Spot on! Great job!",

    "Yes! That is correct!",

    "Fantastic! You got it!"

];


// ============================================================
// WRONG COMMENTARIES
// ============================================================

const wrongCommentaries = [

    "Oops! That answer is incorrect.",

    "Hard luck! Try the next one.",

    "Not quite! Keep going.",

    "Incorrect answer. Stay focused!",

    "Close one! Prepare for the next question."

];


// ============================================================
// TIMER COMMENTARIES
// ============================================================

const timer15sCommentaries = [

    "Only 15 seconds left!",

    "15 seconds remaining. Think quickly!",

    "Time is moving! 15 seconds left!",

    "Quick thinking! 15 seconds remaining!"

];


const timer10sCommentaries = [

    "10 seconds left!",

    "Only 10 seconds remaining!",

    "Quick! Make your decision!",

    "10 seconds! Lock in your answer!"

];


// ============================================================
// RANDOM ITEM
// ============================================================

function getRandomItem(arr) {

    return arr[
        Math.floor(
            Math.random() * arr.length
        )
    ];

}


// ============================================================
// SPEECH SYNTHESIS
// ============================================================

function initVoices() {

    if ("speechSynthesis" in window) {

        const voices =
            window.speechSynthesis.getVoices();


        if (voices.length > 0) {

            synthesisVoice =

                voices.find(
                    voice =>
                        voice.lang.includes("en") &&
                        voice.name.includes("Google")
                )

                ||

                voices.find(
                    voice =>
                        voice.lang.includes("en")
                )

                ||

                voices[0];

        }

    }

}


if ("speechSynthesis" in window) {

    window.speechSynthesis.onvoiceschanged =
        initVoices;

    initVoices();

}


// ============================================================
// AUDIO UNLOCK
// ============================================================

function unlockAudio() {

    if (audioContextUnlocked) {

        return;

    }


    try {

        const AudioContext =
            window.AudioContext ||
            window.webkitAudioContext;


        if (AudioContext) {

            const ctx =
                new AudioContext();

            ctx.resume();

        }


        if ("speechSynthesis" in window) {

            window.speechSynthesis.resume();

        }


        audioContextUnlocked = true;

    }

    catch (error) {

        console.log(
            "Audio unlock:",
            error
        );

    }

}


// ============================================================
// PLAY TONE
// ============================================================

function playTone(
    frequency,
    duration,
    type = "sine"
) {

    unlockAudio();


    try {

        const AudioContext =
            window.AudioContext ||
            window.webkitAudioContext;


        const ctx =
            new AudioContext();


        const oscillator =
            ctx.createOscillator();


        const gain =
            ctx.createGain();


        oscillator.type =
            type;


        oscillator.frequency.setValueAtTime(
            frequency,
            ctx.currentTime
        );


        gain.gain.setValueAtTime(
            0.3,
            ctx.currentTime
        );


        oscillator.connect(gain);

        gain.connect(
            ctx.destination
        );


        oscillator.start();


        oscillator.stop(
            ctx.currentTime + duration
        );

    }

    catch (error) {

        console.log(
            "Tone error:",
            error
        );

    }

}


// ============================================================
// SPEAK TEXT
// ============================================================

function speakText(text) {

    unlockAudio();


    try {

        if (
            "speechSynthesis" in window
        ) {

            window.speechSynthesis.cancel();


            const cleanText =
                text

                    .replace(
                        /[\u{1F600}-\u{1F64F}\u{1F300}-\u{1F5FF}\u{1F680}-\u{1F6FF}\u{2600}-\u{27BF}]/gu,
                        ""
                    )

                    .replace(
                        /\s+/g,
                        " "
                    )

                    .trim();


            if (!cleanText) {

                return;

            }


            const utterance =
                new SpeechSynthesisUtterance(
                    cleanText
                );


            utterance.rate =
                1.15;


            utterance.pitch =
                1.15;


            utterance.volume =
                1;


            if (synthesisVoice) {

                utterance.voice =
                    synthesisVoice;

            }


            window.speechSynthesis.speak(
                utterance
            );

        }

    }

    catch (error) {

        console.log(
            "Speech error:",
            error
        );

    }

}


// ============================================================
// SHOW MONKEY
// ============================================================

function showMonkey(
    text,
    autoHideMs = 3000
) {

    const container =
        document.getElementById(
            "monkey-container"
        );


    const bubbleText =
        document.getElementById(
            "speech-text"
        );


    if (
        !container ||
        !bubbleText
    ) {

        return;

    }


    container.classList.remove(
        "dance-middle"
    );


    bubbleText.innerText =
        text;


    container.classList.add(
        "active"
    );


    playTone(
        600,
        0.1
    );


    speakText(
        text
    );


    if (autoHideMs > 0) {

        setTimeout(
            () => {

                if (
                    timeLeft > 5 ||
                    timeLeft <= 0 ||
                    isOptionAnswered
                ) {

                    hideMonkey();

                }

            },
            autoHideMs
        );

    }

}


// ============================================================
// SHOW MONKEY DANCE
// ============================================================

function showMonkeyDance(
    text,
    autoHideMs = 4500
) {

    const container =
        document.getElementById(
            "monkey-container"
        );


    const bubbleText =
        document.getElementById(
            "speech-text"
        );


    if (
        !container ||
        !bubbleText
    ) {

        return;

    }


    bubbleText.innerText =
        text;


    container.classList.add(
        "active"
    );


    container.classList.add(
        "dance-middle"
    );


    playTone(
        1200,
        0.4
    );


    speakText(
        text
    );


    if (
        typeof confetti ===
        "function"
    ) {

        confetti({

            particleCount: 120,

            spread: 90,

            origin: {
                y: 0.5
            }

        });

    }


    if (autoHideMs > 0) {

        setTimeout(
            () => {

                hideMonkey();

            },
            autoHideMs
        );

    }

}


// ============================================================
// HIDE MONKEY
// ============================================================

function hideMonkey() {

    const container =
        document.getElementById(
            "monkey-container"
        );


    const bubbleText =
        document.getElementById(
            "speech-text"
        );


    if (container) {

        container.classList.remove(
            "active"
        );

        container.classList.remove(
            "dance-middle"
        );

    }


    if (bubbleText) {

        bubbleText.innerText =
            "";

    }

}


// ============================================================
// SOUND EFFECTS
// ============================================================

function playSound(type) {

    unlockAudio();


    if (type === "applause") {

        playTone(
            900,
            0.3
        );


        showMonkey(
            "Outstanding answer team!",
            3000
        );

    }


    else if (type === "tada") {

        showMonkeyDance(
            getRandomItem(
                correctCommentaries
            ),
            4500
        );

    }


    else if (type === "wrong") {

        playTone(
            150,
            0.5,
            "sawtooth"
        );


        showMonkey(
            getRandomItem(
                wrongCommentaries
            ),
            3000
        );

    }


    else if (type === "funny") {

        playTone(
            500,
            0.2
        );


        showMonkey(
            "Keep thinking!",
            2500
        );

    }

}


// ============================================================
// VIEW SWITCHING
// ============================================================

function switchView(viewId) {

    unlockAudio();


    document
        .querySelectorAll(
            ".view-section"
        )
        .forEach(
            section => {

                section.classList.remove(
                    "active"
                );

            }
        );


    const target =
        document.getElementById(
            viewId
        );


    if (target) {

        target.classList.add(
            "active"
        );

    }


    const mainHeader =
        document.getElementById(
            "main-header"
        );


    if (mainHeader) {

        if (
            viewId === "view-stage"
        ) {

            mainHeader.style.display =
                "none";

        }

        else {

            mainHeader.style.display =
                "block";

        }

    }


    hideMonkey();

}


// ============================================================
// START ROUND
// ============================================================

function startRound(roundNum) {

    currentRound =
        roundNum;


    const titleElement =
        document.getElementById(
            "round-rules-title"
        );


    const bodyElement =
        document.getElementById(
            "round-rules-body"
        );


    // ========================================================
    // ROUND 1
    // ========================================================

    if (roundNum === 1) {

        defaultRoundTime =
            30;


        titleElement.innerText =
            "ROUND 1: SPEED & FOUNDATION";


        bodyElement.innerHTML = `

            <p>
                📌 <b>Total Questions:</b>
                275 Questions
            </p>

            <p>
                ⏱️ <b>Time Limit:</b>
                30 Seconds per question
            </p>

            <p>
                💡 <b>Format:</b>
                4 Multiple Choice Options
            </p>

            <p>
                🎯 <b>Difficulty:</b>
                Very Easy / Basic
            </p>

            <p>
                📝 <b>Scoring:</b>
                Maintained manually by the quiz coordinator.
            </p>

        `;

    }


    // ========================================================
    // ROUND 2
    // ========================================================

    else if (roundNum === 2) {

        defaultRoundTime =
            45;


        titleElement.innerText =
            "ROUND 2: CONCEPTUAL MASTERY";


        bodyElement.innerHTML = `

            <p>
                📌 <b>Total Questions:</b>
                200 Questions
            </p>

            <p>
                ⏱️ <b>Time Limit:</b>
                45 Seconds per question
            </p>

            <p>
                💡 <b>Format:</b>
                4 Multiple Choice Options
            </p>

            <p>
                🎯 <b>Difficulty:</b>
                Medium
            </p>

            <p>
                📝 <b>Scoring:</b>
                Maintained manually by the quiz coordinator.
            </p>

        `;

    }


    // ========================================================
    // ROUND 3
    // ========================================================

    else if (roundNum === 3) {

        defaultRoundTime =
            60;


        titleElement.innerText =
            "ROUND 3: CHALLENGE MODE";


        bodyElement.innerHTML = `

            <p>
                📌 <b>Total Questions:</b>
                100 Questions
            </p>

            <p>
                ⏱️ <b>Time Limit:</b>
                60 Seconds per question
            </p>

            <p>
                🔒 <b>Format:</b>
                Options are hidden initially.
            </p>

            <p>
                🏆 <b>Direct Answer:</b>
                Correct = 3 Marks
            </p>

            <p>
                👁️ <b>Options Revealed:</b>
                Correct = 2 Marks
            </p>

            <p>
                ❌ <b>Wrong Answer:</b>
                0 Marks
            </p>

            <p>
                📝 <b>Scoring:</b>
                Maintained manually by the quiz coordinator.
            </p>

        `;

    }


    switchView(
        "view-round-rules"
    );

}


// ============================================================
// OPEN QUESTION GRID
// ============================================================

function openGrid() {

    const titleElement =
        document.getElementById(
            "grid-header-title"
        );


    const gridContainer =
        document.getElementById(
            "numbers-grid"
        );


    if (!gridContainer) {

        return;

    }


    gridContainer.innerHTML =
        "";


    let totalCount =
        275;


    if (currentRound === 2) {

        totalCount =
            200;

    }


    else if (currentRound === 3) {

        totalCount =
            100;

    }


    titleElement.innerText =
        `ROUND ${currentRound} - SELECT A QUESTION NUMBER (${totalCount} TOTAL)`;


    for (
        let i = 1;
        i <= totalCount;
        i++
    ) {

        const button =
            document.createElement(
                "button"
            );


        button.className =
            "num-btn";


        button.innerText =
            i;


        const status =
            questionStatus[
                currentRound
            ][i];


        if (
            status === "correct"
        ) {

            button.classList.add(
                "correct"
            );


            button.innerText =
                `${i} ✓`;

        }


        else if (
            status === "wrong"
        ) {

            button.classList.add(
                "wrong"
            );


            button.innerText =
                `${i} ✗`;

        }


        else if (
            status === "used"
        ) {

            button.classList.add(
                "used"
            );


            button.innerText =
                `${i} ✓`;

        }


        else {

            button.onclick =
                () =>
                    openQuestionStage(
                        i
                    );

        }


        gridContainer.appendChild(
            button
        );

    }


    switchView(
        "view-grid"
    );

}


// ============================================================
// OPEN QUESTION
// ============================================================

function openQuestionStage(qId) {

    currentQuestionId =
        qId;


    isOptionAnswered =
        false;


    round3OptionsRevealed =
        false;


    document.body.classList.remove(
        "flash-red-screen"
    );


    const roundData =
        quizQuestions[
            `round${currentRound}`
        ];


    if (!roundData) {

        alert(
            `Round ${currentRound} question bank is not available.`
        );

        return;

    }


    currentQuestionObj =
        roundData.find(
            question =>
                question.id === qId
        );


    if (!currentQuestionObj) {

        alert(
            `Question ${qId} is not available in Round ${currentRound}.`
        );

        return;

    }


    const quoteElement =
        document.getElementById(
            "funny-meme-quote"
        );


    if (quoteElement) {

        quoteElement.innerText =
            getRandomItem(
                funnyQuotes
            );

    }


    document.getElementById(
        "stage-round-badge"
    ).innerText =
        `ROUND ${currentRound}`;


    document.getElementById(
        "stage-q-number"
    ).innerText =
        `QUESTION #${qId}`;


    document.getElementById(
        "stage-q-text"
    ).innerText =
        currentQuestionObj.question;


    const optionsGrid =
        document.getElementById(
            "stage-options-grid"
        );


    const round3Controls =
        document.getElementById(
            "round3-controls"
        );


    const revealButton =
        document.getElementById(
            "round3-reveal-options"
        );


    const scoringNotice =
        document.getElementById(
            "round3-scoring-notice"
        );


    optionsGrid.innerHTML =
        "";


    const letters = [
        "A",
        "B",
        "C",
        "D"
    ];


    // ========================================================
    // ROUND 3
    // ========================================================

    if (currentRound === 3) {

        round3Controls.style.display =
            "block";


        revealButton.style.display =
            "inline-flex";


        scoringNotice.innerText =
            "DIRECT ANSWER — CORRECT = 3 MARKS";


        currentQuestionObj.options.forEach(
            (option, index) => {

                const card =
                    document.createElement(
                        "div"
                    );


                card.className =
                    "option-card round3-hidden-option";


                card.setAttribute(
                    "data-opt-text",
                    option
                );


                card.innerHTML = `

                    <span class="option-letter">
                        ${letters[index]}
                    </span>

                    <span class="opt-text">
                        🔒 HIDDEN
                    </span>

                `;


                card.onclick =
                    () =>
                        selectOptionCard(
                            index
                        );


                optionsGrid.appendChild(
                    card
                );

            }
        );

    }


    // ========================================================
    // ROUND 1 AND ROUND 2
    // ========================================================

    else {

        round3Controls.style.display =
            "none";


        currentQuestionObj.options.forEach(
            (option, index) => {

                const card =
                    document.createElement(
                        "div"
                    );


                card.className =
                    "option-card";


                card.setAttribute(
                    "data-opt-text",
                    option
                );


                card.innerHTML = `

                    <span class="option-letter">
                        ${letters[index]}
                    </span>

                    <span class="opt-text">
                        ${option}
                    </span>

                `;


                card.onclick =
                    () =>
                        selectOptionCard(
                            index
                        );


                optionsGrid.appendChild(
                    card
                );

            }
        );

    }


    resetTimer();


    switchView(
        "view-stage"
    );


    setTimeout(
        () => {

            startTimerQuietly();

        },
        400
    );

}


// ============================================================
// ROUND 3 — SHOW OPTIONS
// ============================================================

function revealRound3Options() {

    if (
        currentRound !== 3
    ) {

        return;

    }


    if (isOptionAnswered) {

        return;

    }


    round3OptionsRevealed =
        true;


    const optionCards =
        document.querySelectorAll(
            "#stage-options-grid .option-card"
        );


    optionCards.forEach(
        card => {

            const optionText =
                card.getAttribute(
                    "data-opt-text"
                );


            const textElement =
                card.querySelector(
                    ".opt-text"
                );


            if (textElement) {

                textElement.innerText =
                    optionText;

            }


            card.classList.remove(
                "round3-hidden-option"
            );


            card.classList.add(
                "round3-revealed-option"
            );

        }
    );


    const revealButton =
        document.getElementById(
            "round3-reveal-options"
        );


    if (revealButton) {

        revealButton.style.display =
            "none";

    }


    const scoringNotice =
        document.getElementById(
            "round3-scoring-notice"
        );


    if (scoringNotice) {

        scoringNotice.innerText =
            "OPTIONS REVEALED — CORRECT = 2 MARKS";

    }

}


// ============================================================
// OPTION SELECTION
// ============================================================

function selectOptionCard(index) {

    if (isOptionAnswered) {

        return;

    }


    /*
        IMPORTANT:

        In Round 3, the team is expected
        to answer verbally first.

        The options cannot be selected
        until the host clicks SHOW OPTIONS.
    */

    if (
        currentRound === 3 &&
        !round3OptionsRevealed
    ) {

        return;

    }


    isOptionAnswered =
        true;


    pauseTimer();


    const optionCards =
        document.querySelectorAll(
            "#stage-options-grid .option-card"
        );


    const selectedCard =
        optionCards[index];


    if (!selectedCard) {

        return;

    }


    const selectedText =
        selectedCard.getAttribute(
            "data-opt-text"
        );


    const correctText =
        currentQuestionObj.answer;


    // ========================================================
    // CORRECT
    // ========================================================

    if (
        selectedText
            .trim()
            .toLowerCase() ===

        correctText
            .trim()
            .toLowerCase()
    ) {

        selectedCard.classList.add(
            "correct-opt"
        );


        questionStatus[
            currentRound
        ][currentQuestionId] =
            "correct";


        if (
            currentRound === 3
        ) {

            if (
                round3OptionsRevealed
            ) {

                showMonkeyDance(
                    "Correct! This answer earns 2 marks.",
                    4500
                );

            }

            else {

                showMonkeyDance(
                    "Brilliant! Direct correct answer — 3 marks.",
                    4500
                );

            }

        }

        else {

            showMonkeyDance(
                getRandomItem(
                    correctCommentaries
                ),
                4500
            );

        }

    }


    // ========================================================
    // WRONG
    // ========================================================

    else {

        selectedCard.classList.add(
            "wrong-opt"
        );


        questionStatus[
            currentRound
        ][currentQuestionId] =
            "wrong";


        optionCards.forEach(
            card => {

                const text =
                    card.getAttribute(
                        "data-opt-text"
                    );


                if (
                    text &&

                    text
                        .trim()
                        .toLowerCase() ===

                    correctText
                        .trim()
                        .toLowerCase()
                ) {

                    card.classList.add(
                        "correct-opt"
                    );

                }

            }
        );


        document.body.classList.add(
            "flash-red-screen"
        );


        setTimeout(
            () => {

                document.body.classList.remove(
                    "flash-red-screen"
                );

            },
            1200
        );


        playTone(
            150,
            0.5,
            "sawtooth"
        );


        showMonkey(
            getRandomItem(
                wrongCommentaries
            ),
            4000
        );

    }

}


// ============================================================
// TIMER
// ============================================================

function startTimerQuietly() {

    unlockAudio();


    if (timerInterval) {

        clearInterval(
            timerInterval
        );

    }


    timerInterval =
        setInterval(
            () => {


                if (isOptionAnswered) {

                    clearInterval(
                        timerInterval
                    );

                    return;

                }


                if (timeLeft > 0) {

                    timeLeft--;


                    const timer =
                        document.getElementById(
                            "timer-display"
                        );


                    if (timer) {

                        timer.innerText =
                            timeLeft;

                    }


                    // ----------------------------------------
                    // 15 SECONDS
                    // ----------------------------------------

                    if (
                        timeLeft === 15
                    ) {

                        showMonkey(
                            getRandomItem(
                                timer15sCommentaries
                            ),
                            2500
                        );

                    }


                    // ----------------------------------------
                    // 10 SECONDS
                    // ----------------------------------------

                    else if (
                        timeLeft === 10
                    ) {

                        showMonkey(
                            getRandomItem(
                                timer10sCommentaries
                            ),
                            2800
                        );

                    }


                    // ----------------------------------------
                    // 5
                    // ----------------------------------------

                    else if (
                        timeLeft === 5
                    ) {

                        playTone(
                            800,
                            0.1
                        );


                        showMonkey(
                            "5!",
                            0
                        );

                    }


                    // ----------------------------------------
                    // 4
                    // ----------------------------------------

                    else if (
                        timeLeft === 4
                    ) {

                        playTone(
                            850,
                            0.1
                        );


                        showMonkey(
                            "4!",
                            0
                        );

                    }


                    // ----------------------------------------
                    // 3
                    // ----------------------------------------

                    else if (
                        timeLeft === 3
                    ) {

                        playTone(
                            900,
                            0.1
                        );


                        showMonkey(
                            "3!",
                            0
                        );

                    }


                    // ----------------------------------------
                    // 2
                    // ----------------------------------------

                    else if (
                        timeLeft === 2
                    ) {

                        playTone(
                            950,
                            0.1
                        );


                        showMonkey(
                            "2!",
                            0
                        );

                    }


                    // ----------------------------------------
                    // 1
                    // ----------------------------------------

                    else if (
                        timeLeft === 1
                    ) {

                        playTone(
                            1000,
                            0.1
                        );


                        showMonkey(
                            "1!",
                            0
                        );

                    }

                }


                // =================================================
                // TIME UP
                // =================================================

                else {

                    clearInterval(
                        timerInterval
                    );


                    const timer =
                        document.getElementById(
                            "timer-display"
                        );


                    if (timer) {

                        timer.innerText =
                            "00";

                    }


                    playTone(
                        150,
                        0.6,
                        "sawtooth"
                    );


                    showMonkey(
                        "TIME IS UP!",
                        4000
                    );

                }

            },
            1000
        );

}


// ============================================================
// START TIMER
// ============================================================

function startTimer() {

    startTimerQuietly();

}


// ============================================================
// PAUSE TIMER
// ============================================================

function pauseTimer() {

    if (timerInterval) {

        clearInterval(
            timerInterval
        );

        timerInterval =
            null;

    }

}


// ============================================================
// RESET TIMER
// ============================================================

function resetTimer() {

    pauseTimer();


    hideMonkey();


    timeLeft =
        defaultRoundTime;


    const timer =
        document.getElementById(
            "timer-display"
        );


    if (timer) {

        timer.innerText =
            timeLeft;

    }

}


// ============================================================
// BACK TO GRID
// ============================================================

function backToGrid() {

    if (
        currentQuestionId &&

        !questionStatus[
            currentRound
        ][currentQuestionId]
    ) {

        questionStatus[
            currentRound
        ][currentQuestionId] =
            "used";

    }


    pauseTimer();


    hideMonkey();


    document.body.classList.remove(
        "flash-red-screen"
    );


    openGrid();

}