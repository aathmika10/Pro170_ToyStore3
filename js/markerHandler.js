AFRAME.registerComponent("marker-handler",{
    
    init:async function(){

        var toys =await this.getToys();

        this.el.addEventListener("markerFound",()=>{
            console.log("marker is found");
            this.handleMarkerFound();
        });

        this.el.addEventListener("markerLost",()=>{
            console.log("marker is lost");
            this.handleMarkerLost();
        });
    },
    
    handleMarkerFound: function() {
        //changing button div visibility
        var buttonDiv=document.getElementById("button-div");
        buttonDiv.style.display="flex";

        var orderButton = document.getElementById("order-button");
        var orderSummaryButton = document.getElementById("order-summary-button");

        orderButton.addEventListener("click",()=>{
            swal({
                icon:"https://i.imgur.com/4NZ6uLY.jpg",
                title:"Thanks for ordering !",
                text:"   ",
                timer:2000,
                buttons:false
            });
        });

        orderSummaryButton.addEventListener("click",()=>{
            swal({
                icon:"warning",
                title:"Order summary",
                text:"Work in progress"
            })
        })
    },

    handleMarkerLost:function(){
        var buttonDiv=document.getElementById("button-div");
        buttonDiv.style.display="none";
    },
    getToys:async function(){
        return await firebase
          .firestore()
          .collection("toys")
          .get()
          .then(snap=>{
            return snap.docs.map(doc=>doc.data());
          })
    }
})