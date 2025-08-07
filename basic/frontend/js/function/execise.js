function tranform(message) {
    if (message === undefined || message === null) {
        return '연기처럼 사라졌습니다.';
    }
    return '홍길동 변신 - ' + message + '!';
}

let input = prompt('변신할 메시지를 입력하세요:');
let result = tranform(input);
console.log(result);