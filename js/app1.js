let vm = new Vue({
    el : "#app",
    components : {
        'app-child' : {
            template: '<button>Click Me!</button>'
        },
        'app-content' : {
            template : `<div class="container">
<p>하늘을 우러러</p>
<p>한 점 부끄럼이 없기를</p>
<p>잎새에 이는 바람에도</p>
<p>나는</p>
<p>괴로워했다.</p>
<app-child></app-child>
</div>`
        },
    }
});
// app-content안의 app-child는 인식 할 수 없음
// 지역 컴포넌트안에 지역 컴포넌트를 넣을 수 없다