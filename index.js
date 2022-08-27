const questions = [
    'Did you eat right?',
    'Did you go to the gym?',
    'Did you drink enough water',
    'Have you done any commits?',
    'Have you talked to your family?'
]

const answers = []

function ask (index = 0) {
    process.stdout.write(questions[index] + '\n')
}

process.stdin.on('data', (data) => {
    answers.push(data.toString().trim())
    if (questions.length > answers.length) {
        console.log("")
        ask(answers.length)
    } else {
        console.log("\n\n\n")
        console.log("Summary: \n")
        for (let i = 0; i < questions.length; i++) {
            console.log(`${questions[i]} --> ${answers[i]} \n`)
        }
        process.exit()
    }
})

ask()