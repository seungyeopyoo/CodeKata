// rny_string
// 'm'과 "rn"이 모양이 비슷하게 생긴 점을 활용해 문자열에 장난을 하려고 합니다.
// 문자열 rny_string이 주어질 때, rny_string의 모든 'm'을 "rn"으로
// 바꾼 문자열을 return 하는 solution 함수를 작성해 주세요.

// 1 ≤ rny_string의 길이 ≤ 100
// rny_string은 영소문자로만 이루어져 있습니다.
// rny_string	            result
// "masterpiece"	        "rnasterpiece"
// "programmers"	        "prograrnrners"
// "jerry"	                "jerry"
// "burn"	                "burn"

// 예제 1번의 rny_string의 'm'을 "rn"으로 바꾸는 과정을 표로 나타내면 다음과 같습니다.
// rny_string	m	a	s	t	e	r	p	i	e	c	e
// result	    rn	a	s	t	e	r	p	i	e	c	e
// 따라서 "rnasterpiece"를 return 합니다.

// 예제 2번의 rny_string의 'm'을 "rn"으로 바꾸는 과정을 표로 나타내면 다음과 같습니다.
// rny_string	p	r	o	g	r	a	m	m	e	r	s
// result	    p	r	o	g	r	a	rn	rn	e	r	s
// 따라서 "prograrnrners"를 return 합니다.

// 예제 3번의 rny_string에는 'm'이 없습니다. 따라서 rny_string 그대로인 "jerry"를 return 합니다.
// 예제 4번의 rny_string에는 'm'이 없습니다. 따라서 rny_string 그대로인 "burn"를 return 합니다.

// step 1. replace로 될라나 안되면 나열하면서 m 나오면 rn으로 대체

const solution = function (rny_string) {
	return rny_string.replaceAll('m', 'rn');
};
console.log(solution('masterpiece'));
console.log(solution('programmers'));
console.log(solution('jerry'));
console.log(solution('burn'));
