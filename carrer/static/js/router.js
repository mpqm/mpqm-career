(() => {
  const $ = window.jQuery;
  const $body = $('body');
  const $error = $(document.getElementById('route-error').content.firstElementChild).clone();
  const routes = new Map([
    ['home', { title: '박종성 · 풀스택 개발자', render: () => import('./home.js') }],
    ['resume', { title: '박종성 · 이력서', bodyClass: 'resume-mode', render: () => import('./resume.js') }],
    ['portfolio', { title: '박종성 · 상세 포트폴리오', bodyClass: 'detail-mode', render: () => import('./portfolio.js') }],
    ['slides', { title: '박종성 · 포트폴리오 슬라이드', bodyClass: 'slides-mode', render: () => import('./slides.js') }],
    ['archive', { title: '박종성 · 이전 이력서', archive: true }],
  ]);

  async function loadRoute() {
    if (location.protocol === 'file:') {
      throw new Error('로컬 HTTP 서버에서 이 페이지를 열어 주세요. 실행 방법은 carrer/README.md에 있습니다.');
    }
    const requested = new URLSearchParams(location.search).get('view');
    const name = routes.has(requested) ? requested : 'home';
    const route = routes.get(name);
    const markup = await $.ajax({ url: `./templates/${name}.html`, dataType: 'text' });

    document.title = route.title;
    if (route.bodyClass) $body.addClass(route.bodyClass);
    $body.empty().append($.parseHTML(markup, document, false));
    if (route.archive) {
      $('link[rel="stylesheet"]').prop('disabled', true);
      $.getScript('https://cdn.tailwindcss.com');
    }
    if (route.render) await route.render();
    $body.attr('data-route', name);

    if (location.hash) {
      try {
        const anchor = decodeURIComponent(location.hash.slice(1));
        document.getElementById(anchor)?.scrollIntoView();
      } catch (error) {
        if (!(error instanceof URIError)) throw error;
      }
    }
  }

  loadRoute().catch(error => {
    console.error(error);
    $error.find('p').text(error.message || '화면을 불러오지 못했습니다. 새로고침해 주세요.');
    $body.empty().append($error);
  });
})();
