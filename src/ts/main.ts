import _ from 'lodash';
// import sample from './sample';

window.addEventListener('DOMContentLoaded', () => {
  const elemBody = document.querySelector('body')!;
  const elemCircle = document.createElement('div');
  const bgTag =  document.querySelector('.bg')!;
  let windowWidth: number;
  let windowHeight: number;
  let bodyHeight: number;
  // let targetScroll = 0;
  let currentScroll = 0;
  // let scrollOffset = 0;
  const circleSize = 20;

  init();
  circularMoving();


  // 初期実行処理
  function init() {
    // 背景の要素のDOM要素追加
    elemCircle.classList.add('circle');
    bgTag.insertAdjacentElement('beforeend', elemCircle);

    setWindowSize();
    window.addEventListener('resize', _.debounce(() => {
      setWindowSize();
    }, 300));
  }

  // windowサイズの保持
  function setWindowSize() {
    windowWidth = window.innerWidth;
    windowHeight = window.innerHeight;
    bodyHeight = elemBody.scrollHeight;

    console.log(windowWidth, windowHeight);
  }

  // 円運動
  function circularMoving(){
    updateScroll();

    const circularRadius = 500;
    const rad = currentScroll / (bodyHeight - windowHeight) * Math.PI*2 *2;
    const x = Math.cos(rad) * circularRadius - circleSize/2;
    const y = Math.sin(rad) * circularRadius/3 - circleSize/2;

    elemCircle.setAttribute('style', `transform: translate(${x}px, ${y}px);`);

    requestAnimationFrame(circularMoving);
    // console.log(currentScroll);
  }

  window.addEventListener('scroll', () => {
    // console.log(document.documentElement.scrollTop);
  });

  // スクロール位置を取得、滑らかに補間
  function updateScroll(){
    const targetScroll = document.documentElement.scrollTop;
    currentScroll = lerp(currentScroll, targetScroll, 0.1);
    // scrollOffset = targetScroll - currentScroll;
    // console.log(targetScroll, currentScroll, scrollOffset);
  }

  // リープ関数
  function lerp(start: number, end: number, multiplier: number): number{
    return (1 - multiplier) * start + multiplier * end;
  }
});