let direction = '';
let oldy , oldx =0;

const mouseDirection = (e)=>{
  if(e.pageX > oldx){
    console.log('direction from the right')
    return 'right';
  } else if(e.pageX > oldx){
    console.log('direction from the left')
    return 'left';
  } else if(e.pageX < oldx){
    console.log('direction from the top')
    return 'top'
  } else if(e.pageY > oldy){
    console.log('direction from the buttom')
    return 'buttom';
  }
  oldx = e.pageX;
  oldy = e.pageY;
}


export default {mouseDirection}