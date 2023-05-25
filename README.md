# SASS 강의

### youtube app clone 강의는 javascript이지만 typescript로 해보자 !

### scss

- css로 컴파일되거나 해석되는 전처리기 스크립팅 언어이다.
- sass로 작업을 시작하면 사전 처리된 sass파일을 웹사이트에서 사용할 수 있는 일반 css 파일로 저장한다.
  sass -> css -> 브라우저

### sass vs scss

- sass는 그 자체가 스크립팅 언어인 반면 scss는 기존 css 구문 위에 구축되는 sass의 기본 문법이다.css와 같은 세미콜론과 대괄호를 사용함.

- sass는 원본 구문이 필요할 때 사용되며 scss는 코드 구문이 필요하지 않다.

- sass는 엄격한 들여쓰기를 따르지만 scss는 엄격한 들여쓰기가 없다.

- sass는 공백이 있고 세미콜론이 없는 느슨한 구문을 가지고 있다. scss는 css 스타일에 더 가깝고 세미콜론과 중괄호이 사용은 필수이다.

- sass는 기존 css프로젝트에 추가하기 어려운 반면, scss는 기존 css프로젝트에 쉽게 추가 가능.

### 요약

- Sass => 코드를 css로 해석하는 전처리기 + 문법
- Scss => 문법
- 주로 Sass 사용할 때 ,좀 더 css랑 닮은 Scss 문법을 기반으로 작성하고 이것을 Sass전처리기로 css로 만들어주고, 그걸 브라우저에서 보여주도록

### Sass 특징

- Variables : 변수 $기호
- Nesting : Sass를 사용하면 HTML의 동일한 시각적 계층 구조를 따르는 방식으로 CSS 선택기를 중첩할 수 있다.
- Partials : 부분 파일은 앞에 밑줄이 붙은 이름의 Sass 파일이다. CSS 파일로 생성되어서는 안 된다는 것을 Sass가 알 수 있음. \_partial.scss와 같은 이름을 지정하며 @use 규칙과 함께 사용한다.
- Modules : @use를 사용하여 가져온 스타일시트를 모듈(Module)이라고 부름.
- Mixins : 재사용하려는 CSS 선언 그룹 만들 수 있음.
- Extend/Inheritance : @extend를 사용하면 한 선택기에서 다른 선택기로 CSS 속성 집합을 공유.
- Operators : Sass에는 +, -, \*, math.div() 및 %와 같은 소수의 표준 수학 연산자가 있음.

### Mixins vs Extend

Mixin은 소스코드의 중복을 막기 위해 사용하고, Extend, %placeholder은 연관성 있는 규칙에 만들기 위해 사용합니다.
선택 자간의 연관성이 존재한다면 extend를 사용하고, 연관성은 없지만 코드가 겹치는 선택자들이라면 mixin으로 소스코드의 중복을 없애기 위해 사용해야 한다.

### 강의보면서 몰랐던 것들 정리

- -webkit-scrollbar-thumb : 마우스로 움직이는 스크롤바 막대를 꾸밈
- -webkit-scrollbar-track : 스크롤바 막대가 움직이는 영역 뒷 배경을 꾸밈

* flex-basis : flex item의 크기를 설정, 이때 axis 방향으로의 크기를 설정한다.(flex-direction: column인 경우 높이가 변한다)

sass 강의인 데,. sass보다 youtube clone 코딩 느낌이 강해서 스타일부분 쪽만 보고 끝냈다.,그래서 프로젝트 미완성
