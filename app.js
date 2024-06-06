
const assignment1=document.querySelector(".assignment1")
async function allassignments(){
    try {
       const response=await fetch("https://assignment-api-eta.vercel.app/api/assignments") 
       const data=await response.json();
       console.log(data)
       const assignments=data.data;
       console.log(assignments)
       renderassignments(assignments)
    } catch (error) {
        console.log(error)
    }
}

function  renderassignments(assignments){
    assignment1.innerHTML='',
    assignments.forEach((assignment)=>{
        const assignmentsHTML =` <div class="assignment1">
        <div class="assignment2">
            <div class="image">
                <img src="image.png" alt="">
            </div>
            <div class="title">
                <p>${assignment.id}</p>
                <p>${assignment.title}</p>
                <p>${assignment.slug}</p>
                <p>${assignment.description}</p>
                <a href="https://desishub-docs.vercel.app/programming-tutorials/nextjs/next-auth",>watch totorials</a>
                <a href="https://desishub-docs.vercel.app/programming-tutorials/nextjs/next-auth",>watch another</a>
                <p>${assignment.topic}</p>
                <p>${assignment.createdAt}</p>
                <p>${assignment.updatedAt}</p>
            </div>
        </div>
    </div>`
        assignment1.insertAdjacentHTML("beforeend",assignmentsHTML) 
    })
}
allassignments()