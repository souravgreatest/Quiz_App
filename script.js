document.addEventListener("DOMContentLoaded", function(){
    let quizData = {
        sections: [
            {
                sectionTitle: "Indian History",
                questions: [
                    {
                        questionType: "mcq",
                        question: "Who was the first President of India?",
                        options: ["Dr. Rajendra Prasad", "Jawaharlal Nehru", "Sardar Vallabhbhai Patel", "Indira Gandhi"],
                        answer: "Dr. Rajendra Prasad"
                    },
                    {
                        questionType: "mcq",
                        question: "When did India gain independence from British rule?",
                        options: ["1945", "1947", "1950", "1962"],
                        answer: "1947"
                    },
                    {
                        questionType: "mcq",
                        question: "Who built the Red Fort in Delhi?",
                        options: ["Shah Jahan", "Akbar", "Aurangzeb", "Bahadur Shah II"],
                        answer: "Shah Jahan"
                    },
                    {
                        questionType: "mcq",
                        question: "Who was the last ruler of the Maurya dynasty?",
                        options: ["Chandragupta Maurya", "Bindusara", "Ashoka", "Brihadratha"],
                        answer: "Brihadratha"
                    },
                    {
                        questionType: "mcq",
                        question: "Who founded the city of Kolkata (Calcutta)?",
                        options: ["Robert Clive", "Job Charnock", "Warren Hastings", "Lord Dalhousie"],
                        answer: "Job Charnock"
                    },
                    {
                        questionType: "mcq",
                        question: "Which Mughal emperor was known as 'Jahangir'?",
                        options: ["Akbar", "Shah Jahan", "Aurangzeb", "Muhammad bin Tughluq"],
                        answer: "Akbar"
                    },
                    {
                        questionType: "mcq",
                        question: "Who was the first Indian woman to become the President of the Indian National Congress?",
                        options: ["Sarojini Naidu", "Indira Gandhi", "Vijaya Lakshmi Pandit", "Annie Besant"],
                        answer: "Annie Besant"
                    },
                    {
                        questionType: "mcq",
                        question: "Which battle is considered as the turning point of the Indian Rebellion of 1857?",
                        options: ["Battle of Plassey", "Battle of Buxar", "Battle of Jhansi", "Battle of Delhi"],
                        answer: "Battle of Delhi"
                    },
                    {
                        questionType: "mcq",
                        question: "Who was the first Sultan of Delhi?",
                        options: ["Qutb-ud-din Aibak", "Iltutmish", "Razia Sultan", "Balban"],
                        answer: "Qutb-ud-din Aibak"
                    },
                    {
                        questionType: "mcq",
                        question: "Who was known as the 'Iron Man of India'?",
                        options: ["Jawaharlal Nehru", "Sardar Vallabhbhai Patel", "Subhas Chandra Bose", "B.R. Ambedkar"],
                        answer: "Sardar Vallabhbhai Patel"
                    }
                ]
            },
            {
                sectionTitle: "General Knowledge",
                questions: [
                    {
                        questionType: "mcq",
                        question: "What is the capital of Australia?",
                        options: ["Sydney", "Melbourne", "Canberra", "Perth"],
                        answer: "Canberra"
                    },
                    {
                        questionType: "mcq",
                        question: "Who is known as the 'Father of Computers'?",
                        options: ["Charles Babbage", "Alan Turing", "Tim Berners-Lee", "Bill Gates"],
                        answer: "Charles Babbage"
                    },
                    {
                        questionType: "mcq",
                        question: "Which planet is known as the 'Red Planet'?",
                        options: ["Venus", "Mars", "Jupiter", "Saturn"],
                        answer: "Mars"
                    },
                    {
                        questionType: "mcq",
                        question: "What is the chemical symbol for sodium?",
                        options: ["Na", "So", "Sn", "Nb"],
                        answer: "Na"
                    },
                    {
                        questionType: "mcq",
                        question: "What is the largest mammal in the world?",
                        options: ["Elephant", "Blue Whale", "Giraffe", "Hippopotamus"],
                        answer: "Blue Whale"
                    },
                    {
                        questionType: "mcq",
                        question: "Which country is known as the 'Land of the Rising Sun'?",
                        options: ["Japan", "China", "South Korea", "India"],
                        answer: "Japan"
                    },
                    {
                        questionType: "mcq",
                        question: "What is the chemical symbol for gold?",
                        options: ["Au", "Ag", "Fe", "Cu"],
                        answer: "Au"
                    },
                    {
                        questionType: "mcq",
                        question: "What is the tallest mammal in the world?",
                        options: ["Giraffe", "Elephant", "Horse", "Lion"],
                        answer: "Giraffe"
                    },
                    {
                        questionType: "mcq",
                        question: "What is the largest continent by land area?",
                        options: ["Asia", "Africa", "North America", "Europe"],
                        answer: "Asia"
                    },
                    {
                        questionType: "mcq",
                        question: "Who wrote the play 'Romeo and Juliet'?",
                        options: ["William Shakespeare", "Jane Austen", "Emily Bronte", "Charles Dickens"],
                        answer: "William Shakespeare"
                    }
                ]
            },
            {
                sectionTitle: "Science",
                questions: [
                    {
                        questionType: "mcq",
                        question: "What is the chemical symbol for water?",
                        options: ["H2O", "CO2", "O2", "NaCl"],
                        answer: "H2O"
                    },
                    {
                        questionType: "mcq",
                        question: "Which gas is most abundant in Earth's atmosphere?",
                        options: ["Nitrogen", "Oxygen", "Carbon Dioxide", "Argon"],
                        answer: "Nitrogen"
                    },
                    {
                        questionType: "mcq",
                        question: "What is the atomic number of carbon?",
                        options: ["5", "6", "7", "8"],
                        answer: "6"
                    },
                    {
                        questionType: "mcq",
                        question: "What is the unit of electric current?",
                        options: ["Volt", "Watt", "Ampere", "Ohm"],
                        answer: "Ampere"
                    },
                    {
                        questionType: "mcq",
                        question: "Which planet is known as the 'Morning Star'?",
                        options: ["Venus", "Mars", "Jupiter", "Saturn"],
                        answer: "Venus"
                    },
                    {
                        questionType: "mcq",
                        question: "What is the smallest bone in the human body?",
                        options: ["Femur", "Tibia", "Stapes", "Radius"],
                        answer: "Stapes"
                    },
                    {
                        questionType: "mcq",
                        question: "What is the process by which plants make their food?",
                        options: ["Photosynthesis", "Respiration", "Transpiration", "Pollination"],
                        answer: "Photosynthesis"
                    },
                    {
                        questionType: "mcq",
                        question: "What is the study of earthquakes called?",
                        options: ["Meteorology", "Seismology", "Volcanology", "Geology"],
                        answer: "Seismology"
                    },
                    {
                        questionType: "mcq",
                        question: "Which element has the highest melting point?",
                        options: ["Gold", "Iron", "Platinum", "Tungsten"],
                        answer: "Tungsten"
                    },
                    {
                        questionType: "mcq",
                        question: "What is the process by which water vapor turns into liquid water?",
                        options: ["Evaporation", "Condensation", "Sublimation", "Freezing"],
                        answer: "Condensation"
                    }
                ]
            },
            {
                sectionTitle: "Mathematics",
                questions: [
                    {
                        questionType: "mcq",
                        question: "What is the value of 2 + 2 * 2?",
                        options: ["4", "6", "8", "10"],
                        answer: "6"
                    },
                    {
                        questionType: "mcq",
                        question: "What is the square root of 64?",
                        options: ["4", "6", "8", "10"],
                        answer: "8"
                    },
                    {
                        questionType: "mcq",
                        question: "What is the value of π (pi) rounded to two decimal places?",
                        options: ["3.12", "3.14", "3.16", "3.18"],
                        answer: "3.14"
                    },
                    {
                        questionType: "mcq",
                        question: "What is the next number in the sequence: 2, 4, 6, 8, ...?",
                        options: ["10", "12", "14", "16"],
                        answer: "10"
                    },
                    {
                        questionType: "mcq",
                        question: "What is the product of 7 multiplied by 9?",
                        options: ["54", "63", "72", "81"],
                        answer: "63"
                    },
                    {
                        questionType: "mcq",
                        question: "What is the sum of angles in a triangle?",
                        options: ["90 degrees", "120 degrees", "180 degrees", "360 degrees"],
                        answer: "180 degrees"
                    },
                    {
                        questionType: "mcq",
                        question: "What is the area of a square with side length 5 units?",
                        options: ["20 square units", "25 square units", "30 square units", "35 square units"],
                        answer: "25 square units"
                    },
                    {
                        questionType: "mcq",
                        question: "What is the value of 3 to the power of 4?",
                        options: ["9", "12", "27", "81"],
                        answer: "81"
                    },
                    {
                        questionType: "mcq",
                        question: "What is the sum of the first 10 positive integers?",
                        options: ["45", "50", "55", "60"],
                        answer: "55"
                    },
                    {
                        questionType: "mcq",
                        question: "What is the circumference of a circle with radius 5 units?",
                        options: ["10π", "15π", "20π", "25π"],
                        answer: "10π"
                    }
    
                ]
            },
            {
                sectionTitle: "Indian Geography",
                questions: [
                    {
                        questionType: "mcq",
                        question: "Which is the highest mountain peak in India?",
                        options: ["Kangchenjunga", "Mount Everest", "Nanda Devi", "K2"],
                        answer: "Kangchenjunga"
                    },
                    {
                        questionType: "mcq",
                        question: "Which river is known as the 'Sorrow of Bihar'?",
                        options: ["Ganges", "Yamuna", "Kosi", "Godavari"],
                        answer: "Kosi"
                    },
                    {
                        questionType: "mcq",
                        question: "Which is the largest freshwater lake in India?",
                        options: ["Chilika Lake", "Wular Lake", "Vembanad Lake", "Dal Lake"],
                        answer: "Wular Lake"
                    },
                    {
                        questionType: "mcq",
                        question: "Which Indian state is known as the 'Land of Five Rivers'?",
                        options: ["Punjab", "Haryana", "Uttar Pradesh", "Bihar"],
                        answer: "Punjab"
                    },
                    {
                        questionType: "mcq",
                        question: "Which desert is located in the Indian state of Rajasthan?",
                        options: ["Thar Desert", "Sahara Desert", "Gobi Desert", "Kalahari Desert"],
                        answer: "Thar Desert"
                    },
                    {
                        questionType: "mcq",
                        question: "Which is the longest river in India?",
                        options: ["Ganges", "Yamuna", "Brahmaputra", "Godavari"],
                        answer: "Ganges"
                    },
                    {
                        questionType: "mcq",
                        question: "Which Indian state has the highest literacy rate?",
                        options: ["Kerala", "Goa", "Tamil Nadu", "Maharashtra"],
                        answer: "Kerala"
                    },
                    {
                        questionType: "mcq",
                        question: "Which is the highest waterfall in India?",
                        options: ["Jog Falls", "Nohkalikai Falls", "Barkana Falls", "Kunchikal Falls"],
                        answer: "Nohkalikai Falls"
                    },
                    {
                        questionType: "mcq",
                        question: "Which Indian state is known as the 'Spice Garden of India'?",
                        options: ["Kerala", "Karnataka", "Assam", "West Bengal"],
                        answer: "Kerala"
                    },
                    {
                        questionType: "mcq",
                        question: "Which is the southernmost point of India?",
                        options: ["Indira Point", "Kanyakumari", "Cape Comorin", "Cape of Good Hope"],
                        answer: "Indira Point"
                    }
    
                ]
            },
            {
                sectionTitle: "Indian Literature",
                questions: [
                    {
                        questionType: "mcq",
                        question: "Who is the author of 'The Guide'?",
                        options: ["R.K. Narayan", "Munshi Premchand", "Rabindranath Tagore", "Sarojini Naidu"],
                        answer: "R.K. Narayan"
                    },
                    {
                        questionType: "mcq",
                        question: "Which Indian poet was known as the 'Nightingale of India'?",
                        options: ["Sarojini Naidu", "Rabindranath Tagore", "Subramania Bharati", "Mirza Ghalib"],
                        answer: "Sarojini Naidu"
                    },
                    {
                        questionType: "mcq",
                        question: "Who wrote the epic poem 'Ramayana'?",
                        options: ["Valmiki", "Tulsidas", "Ved Vyasa", "Kalidasa"],
                        answer: "Valmiki"
                    },
                    {
                        questionType: "mcq",
                        question: "Who is the author of the book 'The God of Small Things'?",
                        options: ["Arundhati Roy", "Jhumpa Lahiri", "Vikram Seth", "Salman Rushdie"],
                        answer: "Arundhati Roy"
                    },
                    {
                        questionType: "mcq",
                        question: "Which Indian writer was awarded the Nobel Prize in Literature in 1913?",
                        options: ["Rabindranath Tagore", "R.K. Narayan", "Mulk Raj Anand", "Ruskin Bond"],
                        answer: "Rabindranath Tagore"
                    },
                    {
                        questionType: "mcq",
                        question: "Who wrote the famous play 'Tughlaq'?",
                        options: ["Girish Karnad", "Vijay Tendulkar", "Badal Sircar", "Girish Raghunath Karnad"],
                        answer: "Girish Karnad"
                    },
                    {
                        questionType: "mcq",
                        question: "Which Indian author wrote the novel 'Midnight's Children'?",
                        options: ["Salman Rushdie", "Vikram Seth", "Arundhati Roy", "Rohinton Mistry"],
                        answer: "Salman Rushdie"
                    },
                    {
                        questionType: "mcq",
                        question: "Who is the author of the famous poem 'Where the Mind is Without Fear'?",
                        options: ["Rabindranath Tagore", "Sarojini Naidu", "Gulzar", "Harivansh Rai Bachchan"],
                        answer: "Rabindranath Tagore"
                    },
                    {
                        questionType: "mcq",
                        question: "Which Indian writer's autobiography is titled 'My Experiments with Truth'?",
                        options: ["Mahatma Gandhi", "Jawaharlal Nehru", "Rabindranath Tagore", "Subhas Chandra Bose"],
                        answer: "Mahatma Gandhi"
                    },
                    {
                        questionType: "mcq",
                        question: "Who is the author of 'The Palace of Illusions'?",
                        options: ["Chitra Banerjee Divakaruni", "Arundhati Roy", "Anita Desai", "Kiran Desai"],
                        answer: "Chitra Banerjee Divakaruni"
                    }
                ]
            },
            {
                sectionTitle: "World History",
                questions: [
                    {
                        questionType: "mcq",
                        question: "Who was the first female Prime Minister of the United Kingdom?",
                        options: ["Margaret Thatcher", "Theresa May", "Indira Gandhi", "Angela Merkel"],
                        answer: "Margaret Thatcher"
                    },
                    {
                        questionType: "mcq",
                        question: "Which war was fought between North Korea and South Korea?",
                        options: ["World War I", "World War II", "Korean War", "Vietnam War"],
                        answer: "Korean War"
                    },
                    {
                        questionType: "mcq",
                        question: "Who was the first President of the United States?",
                        options: ["George Washington", "Thomas Jefferson", "John Adams", "Abraham Lincoln"],
                        answer: "George Washington"
                    },
                    {
                        questionType: "mcq",
                        question: "Which ancient civilization built the Great Pyramids of Giza?",
                        options: ["Egyptians", "Greeks", "Romans", "Persians"],
                        answer: "Egyptians"
                    },
                    {
                        questionType: "mcq",
                        question: "Which city was the capital of the Roman Empire?",
                        options: ["Athens", "Rome", "Alexandria", "Constantinople"],
                        answer: "Rome"
                    },
                    {
                        questionType: "mcq",
                        question: "Who was the first emperor of China?",
                        options: ["Qin Shi Huang", "Mao Zedong", "Sun Yat-sen", "Chiang Kai-shek"],
                        answer: "Qin Shi Huang"
                    },
                    {
                        questionType: "mcq",
                        question: "Which civilization is known for its advanced city planning and sewage systems?",
                        options: ["Indus Valley Civilization", "Mayan Civilization", "Mesopotamian Civilization", "Aztec Civilization"],
                        answer: "Indus Valley Civilization"
                    },
                    {
                        questionType: "mcq",
                        question: "Who was the leader of the Soviet Union during World War II?",
                        options: ["Joseph Stalin", "Vladimir Lenin", "Mikhail Gorbachev", "Nikita Khrushchev"],
                        answer: "Joseph Stalin"
                    },
                    {
                        questionType: "mcq",
                        question: "Which event marked the beginning of the French Revolution?",
                        options: ["Storming of the Bastille", "Execution of Louis XVI", "Reign of Terror", "Napoleon's rise to power"],
                        answer: "Storming of the Bastille"
                    },
                    {
                        questionType: "mcq",
                        question: "Who was the first female ruler of England?",
                        options: ["Queen Elizabeth I", "Mary I", "Queen Victoria", "Anne"],
                        answer: "Queen Mary I"
                    }
    
                ]
            },
            {
                sectionTitle: "Technology",
                questions: [
                    {
                        questionType: "mcq",
                        question: "Who is the CEO of Tesla, Inc.?",
                        options: ["Elon Musk", "Jeff Bezos", "Tim Cook", "Mark Zuckerberg"],
                        answer: "Elon Musk"
                    },
                    {
                        questionType: "mcq",
                        question: "Which company developed the first graphical web browser?",
                        options: ["Netscape", "Microsoft", "Google", "Mozilla"],
                        answer: "Netscape"
                    },
                    {
                        questionType: "mcq",
                        question: "What does 'CPU' stand for in computing?",
                        options: ["Central Processing Unit", "Computer Processing Unit", "Central Processor Unit", "Control Processing Unit"],
                        answer: "Central Processing Unit"
                    },
                    {
                        questionType: "mcq",
                        question: "Which programming language is commonly used for building Android apps?",
                        options: ["Java", "Python", "C++", "Swift"],
                        answer: "Java"
                    },
                    {
                        questionType: "mcq",
                        question: "Who is known as the 'Father of Computer Science'?",
                        options: ["Alan Turing", "Charles Babbage", "Tim Berners-Lee", "Steve Jobs"],
                        answer: "Alan Turing"
                    },
                    {
                        questionType: "mcq",
                        question: "Which company developed the first commercially successful microprocessor?",
                        options: ["Intel", "AMD", "IBM", "Apple"],
                        answer: "Intel"
                    },
                    {
                        questionType: "mcq",
                        question: "What does 'HTML' stand for?",
                        options: ["Hypertext Markup Language", "Hyperlink Text Markup Language", "Hypertext Transfer Markup Language", "Hyperlink Transfer Markup Language"],
                        answer: "Hypertext Markup Language"
                    },
                    {
                        questionType: "mcq",
                        question: "What is the term used to describe the process of making a computer program bug-free?",
                        options: ["Debugging", "Compiling", "Testing", "Coding"],
                        answer: "Debugging"
                    },
                    {
                        questionType: "mcq",
                        question: "What is the smallest unit of data in a computer?",
                        options: ["Bit", "Byte", "Kilobyte", "Megabyte"],
                        answer: "Bit"
                    },
                    {
                        questionType: "mcq",
                        question: "Which company developed the first smartphone?",
                        options: ["IBM", "Motorola", "Apple", "Nokia"],
                        answer: "IBM"
                   }
                ] 
            }
        ]
    };

    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    quizData.sections.forEach(section => {
        section.questions = shuffleArray(section.questions);
    });


    initSection();

    function initSection(){
        let card_btn = document.querySelectorAll('.card-btn');
        card_btn.forEach((card) => {
            card.addEventListener("click", () => {
                let card_btn_number = parseInt(card.getAttribute("data-section"));
                startQuiz(card_btn_number);
            })
        })
    }

    function startQuiz(index){

        const currentQuestionBank = quizData.sections[index].questions;
        let currentQuestionIndex = 0;
        let score = 0;
        let answerSelected = false;

        document.querySelector(".main-content").style.display = "none";
        document.querySelector("body").style.backgroundImage = "none";
        document.querySelector(".question-container").style.display ="flex"
        document.querySelector(".question-container").innerHTML = `
        <div class="questions-content">
            
        </div>
        <div class="options">
            <ul>

            </ul>
        <p class="right">Correct Answer!</p>
        <p class="wrong"></p>
        <button class="next-btn">Next</button>
        </div>
        `

        showQuestion();

        function showQuestion(){
            answerSelected = false;
            let question = currentQuestionBank[currentQuestionIndex];
            let questionElement = document.querySelector(".questions-content");
            let optionsElement = document.querySelector("ul");

            questionElement.textContent = question.question;
            optionsElement.innerHTML = ``;
            document.querySelector(".right").style.display = 'none';
            let wrong = document.querySelector(".wrong").style.display = 'none'

            
            question.options.forEach(option => {
                const optionElement = document.createElement('li');
                optionElement.textContent = option;
                optionsElement.appendChild(optionElement);

    
                optionElement.addEventListener("click", function(){
                    if(!answerSelected){
                        answerSelected = true;
                        optionElement.classList.add("selected");
                        checkAnswer(option, question.answer);
                    }
                })
            })
        }


        document.querySelector(".next-btn").addEventListener("click", () => {
            if(currentQuestionIndex == currentQuestionBank.length - 1){
                endQuiz();
            }
            else{
                answerSelected = false
                currentQuestionIndex++;
                showQuestion();
            }
        })

        function checkAnswer(userAns, correctAns){
            if(userAns === correctAns){
                score++;
                document.querySelector(".right").style.display = 'block';
                updateScore()
            }
            else{
                let wrong = document.querySelector(".wrong");
                wrong.innerHTML = `Wrong Answer! "${correctAns}"`
                wrong.style.display = 'block'
            }
        }

        function updateScore(){
            console.log(score)
        }

        function endQuiz(){
            let questionContainer = document.querySelector(".question-container");

            questionContainer.innerHTML = `
            <img src="img/quiz end.jpg" alt="quizEnd">
            <div class="scoreElement>
                <h1 class="quizEnd-h1">QUIZ Completed</h1>
                <p>Your Final Score is : ${score}/10</p>
                <button id="home-btn">Go To Home</button>
            </div>
            `;

            let homeBtn = document.getElementById("home-btn");

            homeBtn.addEventListener("click", function(){
                document.querySelector(".main-content").style.display = "";
                document.querySelector("body").style.backgroundImage = "";
                questionContainer.style.display = `none`;

                function shuffleArray(array) {
                    for (let i = array.length - 1; i > 0; i--) {
                        const j = Math.floor(Math.random() * (i + 1));
                        [array[i], array[j]] = [array[j], array[i]];
                    }
                    return array;
                }
            
                // Shuffle questions within each section
                quizData.sections.forEach(section => {
                    section.questions = shuffleArray(section.questions);
                });
            })
        }
    }

    let randonBtn = document.querySelector(".randon-btn-btn");

    randonBtn.addEventListener("click",function(){
        // Get a random section index
        const randomSectionIndex = Math.floor(Math.random() * quizData.sections.length);
        console.log(randomSectionIndex);
    
        // Start the quiz for the randomly selected section
        startQuiz(randomSectionIndex);
    })

})


