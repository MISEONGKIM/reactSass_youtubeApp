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

### Mixins vs Extend

Mixin은 소스코드의 중복을 막기 위해 사용하고, Extend, %placeholder은 연관성 있는 규칙에 만들기 위해 사용합니다.
선택 자간의 연관성이 존재한다면 extend를 사용하고, 연관성은 없지만 코드가 겹치는 선택자들이라면 mixin으로 소스코드의 중복을 없애기 위해 사용해야 한다.

### 강의보면서 몰랐던 것들 정리

- -webkit-scrollbar-thumb : 마우스로 움직이는 스크롤바 막대를 꾸밈
- -webkit-scrollbar-track : 스크롤바 막대가 움직이는 영역 뒷 배경을 꾸밈

* flex-basis : flex item의 크기를 설정, 이때 axis 방향으로의 크기를 설정한다.(flex-direction: column인 경우 높이가 변한다)
