$(document).ready(function() {
    const parallax = $('body,html');
    parallax.on('mousemove', function(event) {
        const offset = 90
        const mouseX = event.clientX;
        const mouseY = event.clientY;
        const offsetX = (mouseX / parallax.width() - 0.5) * offset;
        const offsetY = (mouseY / parallax.height() - 0.5) * offset;

        $('.layer-1').css('transform', `translate(${offsetX}px, ${offsetY}px)`);
        $('.layer-2').css('transform', `translate(${offsetX * 0.8}px, ${offsetY * 0.8}px)`);
        $('.layer-3').css('transform', `translate(${offsetX * 0.6}px, ${offsetY * 0.6}px)`);
        $('.layer-4').css('transform', `translate(${offsetX * 0.4}px, ${offsetY * 0.4}px)`);
    });
});