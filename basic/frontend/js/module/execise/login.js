 // login.js
import { isNotEmpty } from './validator.js';

document.getElementById('loginForm').addEventListener('submit', function (e) {
  e.preventDefault(); // 기본 폼 제출 막기

  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  if (!isNotEmpty(email, '이메일')) return;
  if (!isNotEmpty(password, '비밀번호')) return;

  // 검증 성공 시 구글로 이동
  window.location.href = 'https://www.google.com';
});
