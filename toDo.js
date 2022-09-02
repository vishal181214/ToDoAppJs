// it will show or hide input box which appears 

$('.addItem').click(function (){
  $('#item').toggle();
});

$('#downSub').click(function (){
  $('#item2').hide();
})

$('#down').click(function (){
  $('#item').hide();
})

$('#add').click(function (){
  $('#item').toggle();
});


const taskList = [];

// jquery function to invoke event on onclick
$(function() {
  $("#add").click(function() {
      const name = document.getElementById("jobName").value;
      const taskObj ={
        id: Date.now(),
        task:name
      }
      taskList.push(taskObj);
      if (name === '')
      {
        $("#wipe").show();
        return ;
      }
      else
      {
        createNewCard();
      }
    });
});


// function to create new card
function createNewCard(){

  $("#wipe").hide();
  // const data = document.getElementById("jobName");
  // const shownProp = document.getElementById("cont").tagName;

    // start creating element div
      const div = document.createElement('div');
      $(div).addClass("inner");
      div.setAttribute("id", taskList[taskList.length-1].id + '');
      $("#cont").append(div);

  
    // start creating element p
      const heading = document.createElement('p');
      $(heading).addClass("head");
      div.append(heading);

    
    // start creating element img for trash
      const checkbutton = document.createElement("img");
      checkbutton.setAttribute("src", "icons8-delete-40.png");
      checkbutton.classList.add("check-button");
      div.appendChild(checkbutton);


    // start creating element img for add task   
    const trashbutton = document.createElement("img");
    trashbutton.setAttribute("src", "icons8-add-30.png");
    trashbutton.classList.add("trash-button");
    div.appendChild(trashbutton);
    heading.innerText = taskList[taskList.length-1].task;


    // function to delete card/task
      checkbutton.addEventListener('click', function() {
        div.remove();
        const noOfCards = document.getElementsByClassName("inner").length;
        if (!noOfCards) {
          $("#wipe").show();
        }
      });
    
      trashbutton.addEventListener('click', function(){
        $('#item2').show();
        $("#addSub").unbind('click');
        $('#addSub').click(function (){
          const uniqeId = Date.now();
          const val = document.getElementById('pText');
         
          const containerDiv = document.createElement("div");
          containerDiv.setAttribute("class", "container-div");
          div.append(containerDiv);

          const para = document.createElement("p");
          para.setAttribute("class", "paraText");
          para.setAttribute("id", 'p-' + uniqeId);
          para.innerText = val.value;
          containerDiv.append(para);

          const btn = document.createElement("button");
          btn.innerText = "Mark done";
          btn.setAttribute("id", uniqeId);
          btn.setAttribute("class", "btnStyle")

          containerDiv.append(btn);

          $('#item2').hide();

          btn.addEventListener('click', function (event) {
            const paragraph = document.getElementById('p-' + event.currentTarget.id);
            paragraph.setAttribute("class", "paraText strike-through");
            $('#' + event.currentTarget.id).hide();
          });
          
        });
      })
}