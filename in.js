document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('simja');
    
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // 기본 폼 제출 동작 방지
        
        // 폼 데이터를 가져옵니다
        const number = form.elements['number'].value;
        const name = form.elements['name'].value;
        
        // 데이터를 콘솔에 출력 (테스트 용)
        console.log('학번:', number);
        console.log('이름:', name);

        const item = document.createElement('li');
        item.textContent = `${number}${name}`

        list.appendChild(item)

        from.reset();

        // 여기에 데이터 처리 로직을 추가할 수 있습니다
    });
});
