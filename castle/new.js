function doFirst(){
    let canvas = document.getElementById('canvas');
    let context = canvas.getContext('2d');

    canvas.width = 400;
    canvas.height = 400;

    //畫格線
    context.beginPath();
    for(let i=0; i<20; i++){
        let position = i * 50;

        context.moveTo(position,0);
        context.lineTo(position,canvas.height);
        context.fillText(position,position,8);

        context.moveTo(0,position);
        context.lineTo(canvas.width,position);
        context.fillText(position,0,position);
    }
    context.strokeStyle = 'rgba(0,0,0,0.2)';
    context.stroke();
    //=====格線結束


    //地板
    context.beginPath();
    context.moveTo(25,350);
    context.lineTo(375,350);
    context.strokeStyle = '#000';
    context.lineWidth = 2;
    context.stroke();

  
}
window.addEventListener('load',doFirst);