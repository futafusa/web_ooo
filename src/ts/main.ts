import debounce from 'lodash/debounce';
// import sample from './sample';

window.addEventListener('DOMContentLoaded', () => {
  const elemBody = document.querySelector('body') as HTMLBodyElement;
  const elemCircle = document.querySelector('.circle') as HTMLDivElement;
  const elemTrajectory = document.querySelector('.trajectory') as HTMLDivElement;
  let windowWidth: number;
  let windowHeight: number;
  let bodyHeight: number;

  let circleSize = 20;
  let circularRadius = 500;
  let currentScroll = 0;

  const optionIO = {
    root: null,
    rootMargin: '-200px 0px',
    threshold: 0,
  }

  // 初期設定
  init();

  // 円運動
  circularMoving();

  // 交差処理
  observingIntersection();

  //////////////////////////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////////////////////
  // ---------------------------------------------
  // 初期設定
  // ---------------------------------------------
  function init() {
    updateWindowSize();
    window.addEventListener('resize', debounce(() => {
      updateWindowSize();
    }, 300));
  }

  // サイズまわりの更新
  function updateWindowSize() {
    windowWidth = window.innerWidth;
    windowHeight = window.innerHeight;
    bodyHeight = elemBody.scrollHeight;

    // 軌跡サイズの調整
    elemTrajectory.setAttribute(
      'style',
      `
        width: ${circularRadius*2}px;
        height: ${circularRadius/2}px;
        margin-top: -${circularRadius/4}px;
        margin-left: -${circularRadius}px;
        border-radius: ${circularRadius*2}px / ${circularRadius/2}px;
      `
    );
    console.log(windowWidth, windowHeight);
  }

  // ---------------------------------------------
  // 円運動のコア
  // ---------------------------------------------
  function circularMoving(){
    updateScroll();

    const rad = currentScroll / (bodyHeight - windowHeight) * Math.PI*2 *2;
    const x = Math.cos(rad) * circularRadius - circleSize/2;
    const y = Math.sin(rad) * circularRadius/4 - circleSize/2;

    elemCircle.setAttribute('style', `transform: translate(${x}px, ${y}px);`);
    requestAnimationFrame(circularMoving);
  }

  // スクロール位置を取得、滑らかに補間
  function updateScroll(){
    const targetScroll = document.documentElement.scrollTop;
    currentScroll = lerp(currentScroll, targetScroll, 0.1);
  }

  // リープ関数
  function lerp(start: number, end: number, multiplier: number): number{
    return (1 - multiplier) * start + multiplier * end;
  }

  // ---------------------------------------------
  // 交差処理
  // ---------------------------------------------
  function observingIntersection() {
    const targets = document.querySelectorAll('.section');
    const observer = new IntersectionObserver(callbackIO, optionIO);
    targets.forEach((target) => {
      observer.observe(target);
    })
  }

  //intersection obserberの具体的な処理
  function callbackIO(entries: IntersectionObserverEntry[]){
    entries.forEach(entry => {
      if(entry.isIntersecting){
        addClassForSection(entry.target);
      }
    })
  }

  function addClassForSection(domElement: Element){
    // console.log(domElement.id);
    const intersectionTarget = document.getElementById(domElement.id);
    intersectionTarget?.classList.add('active');
  }
});