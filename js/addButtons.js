AFRAME.registerComponent("create-buttons",{
    init:function(){
        var button1=document.createElement("button");
        button1.innerHTML="ORDER NOW"
        button1.setAttribute("id","order-button")
        button1.setAttribute("class","btn btn-warning")

        var button2=document.createElement("button");
        button2.innerHTML="ORDER SUMMARY"
        button2.setAttribute("id","order-summary-button");
        button2.setAttribute("class","btn btn-warning");
        
        var btnDiv=document.getElementById("button-div");
        btnDiv.appendChild(button2);
        btnDiv.appendChild(button1);
    }
})