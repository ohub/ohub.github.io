---
layout: page
title: 계획
permalink: /project/
---

# 내용 설명

유명했던 똥은 죽었다. "인터넷 익스플로러 6"이 장례식을 한 지도 오래 전 일이다.

개인적인 기록을 적는다는 공간은 이미 충분히 많다. 여기도 마찬가지가 될 듯 하다.

정보의 홍수 속에서 정보를 걸러내는 일을 "큐레이션"이라고 부른다지.

여기도 그 역할을 할 것이다. 여기는 그냥 수집된 것들의 모음이면서 개발 참조처로써 쓰게 하고 싶다. 

그저 내가 바라는 건, 구석구석 찾아서 긁어 모은 자료를 복사할 위치다.

----

# HTML

IE 6 대응에 대해 아래와 같은 원칙을 가지고 일했다.

* framework, library, plug-in 등과 같이 무언가 덧붙이는 것으로 의존성을 만들지 말자.
* 어쩔 수 없이 만든 의존성 높은 무언가가 있다면, 꼭 내부 구조를 이해하고 쓰자.
* 화면 대응은 내 옆에 엄청 예민하고 까탈스러운 디자이너가 있다고 생각하고 1px까지 맞춰가며 하자.

기본 틀

{% highlight html %}
<div id="wrap">
	<div id="header">
	</div>
	<hr>
	<div id="container">
	</div>
	<hr>
	<div id="footer">
	</div>
</div>
{% endhighlight %}
