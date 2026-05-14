
const resumeForm = document.getElementById("resume-form");
const resultDisplay = document.getElementById("Result"); 


resumeForm.addEventListener("submit", function (event) {
    event.preventDefault(); 

    const jobDescription = document.getElementById("job-desc").value;
    const fileInput = document.getElementById("resume-file"); 
  const btt = document.getElementById("evaluate");

  
    if (fileInput.files.length === 0) {
        alert("Please upload a file first!");
        return; 
    }

    btt.style.backgroundColor ='white';
  btt.style.color = 'purple'
    

    console.log("Job Description:", jobDescription);
    console.log("File Name:", fileInput.files[0].name);

   
    resultDisplay.textContent = jobDescription  + "...";
    
    
});