function result() {
   
    let students = {
        Chantal: {
            Kotlin: 89,
            Javascript: 90,
            Python: 70,
        },
        Mercy: {
            Kotlin: 82,
            Javascript: 71,
            Python: 72,
        },
        Marie: {
            Kotlin: 88,
            Javascript: 91,
            Python: 76,
        },
        Niyonkuru: {
            Kotlin: 99,
            Javascript: 80,
            Python: 90,
        }
    }

 
    var studentname = document.getElementById('studentname').value;
    let input = studentname
    let def = students[input]
    if (def == undefined) {
        document.getElementById("output").innerHTML = "<h1>There is no information about this student<hr>"
    } else {
        document.getElementById("output").innerHTML = `<hr> Kotlin score  is ${def.Kotlin},<hr>Javascript score is ${def.Javascript},<hr> Python score is ${def.Python}<hr>`
    }
}
