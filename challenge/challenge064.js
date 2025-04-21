// JadenCase 문자열 만들기
// JadenCase란 모든 단어의 첫 문자가 대문자이고, 그 외의 알파벳은 소문자인 문자열입니다. 단, 첫 문자가 알파벳이 아닐 때에는 이어지는 알파벳은 소문자로 쓰면 됩니다. (첫 번째 입출력 예 참고)
// 문자열 s가 주어졌을 때, s를 JadenCase로 바꾼 문자열을 리턴하는 함수, solution을 완성해주세요.

// s는 길이 1 이상 200 이하인 문자열입니다.
// s는 알파벳과 숫자, 공백문자(" ")로 이루어져 있습니다.
// 숫자는 단어의 첫 문자로만 나옵니다.
// 숫자로만 이루어진 단어는 없습니다.
// 공백문자가 연속해서 나올 수 있습니다.

// s	                            return
// "3people unFollowed me"	        "3people Unfollowed Me"
// "for the last week"	             "For The Last Week"

// step 1. 공백기준으로 split 하고 0번째만 UpperCase + 나머지는 LowerCase
// step 2. 다시 공백기준 join
// 0 번쨰 인덱스에 접근하여 변환 (uppercase lowerCase) 하려할때 문자열의 인덱스로 접근하면(ex : str[0]) 문자열은 불변하기 때문에 변환이 안됨
//	charAt()로 뽑은 값은 문자열로 작동 잘 됨

const solution = function (s) {
	return s
		.split(' ')
		.map(
			(word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
		)
		.join(' ');
};

console.log(solution('3people unFollowed me'));
console.log(solution('for the last week'));
