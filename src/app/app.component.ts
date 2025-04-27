import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'myapp';
  descargarAPK() {
    window.location.href = 'https://pro-app-storage.s3.amazonaws.com/builds/58d085b5-0dbf-4797-8e98-a2d41fcc9927-debug.apk?AWSAccessKeyId=ASIAUUWEHETW3CAIIV7L&Signature=o4eJbfGF9HlDV8cQlCAkbX4jdlY%3D&x-amz-security-token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA1O11CzqbRM%2FPWlw9AOFdNO5l9Fzh%2FdeSBW4KNmthbVAiA36drLMcMuPDwKi0Wb5xEVE1VvlCvqh19bIb3BRmEDSCqbBAhSEAAaDDMxOTMxMjgzMTcyNSIM%2Fjr0xtqzYc%2Bk8kRsKvgDel1vsMW1yJ9cqCJ3Szo4E8yF3tw1FCuUly%2Fnf2YgbLH65cAgiKK%2BPl1D1%2Bv7pXBLnTD8nvHP74cWKRevHelWb64fm6WXqvCGWznTGv5PVYtXolDssv4tOhykfMtuJw%2BmyyxwHDQ5UP7E4%2FdRGkCBB6Vguilt0qNFE62h01EijHkf9I5O4nRUbStU2tyvqKHCjBEZm9HchMJXYcUBuOOoNrijeOdDOmqcwTxevHb2DLw4LQQw7kj1%2Bii203hdwRaoI6PDlcvmz%2Fq%2FLv8vwQy0rBMywwDAXGPjI%2B7lXi3tevSEdsfFyHbqn9FuZ7u2SIJXv1JzDG5gfOmgQxmbR0tuqK4TzZWEBgdIxCVQ5nI69yx0OYqUg76L%2B%2FbZULTjTU7E3cMwWM7YrjdKTTjSiyBtjzILoUlDxNYYWByauFEFLJOtGR8sjPhS%2BqFWzo0C98eTtXhVBcG2ei9dxtcefSBDdu2meijqf4Rhqr19YQ3bu29sjuQUxwB8wRTes7H3g9SpRP8wjRtNeB4xC4t0jQfJsksJCgqe2deoCVIg%2FicOb5RXJpLcQblkox45NKpwCy3owPkqfkueY3Yb8AaXCZogyJAobstYU1%2B1CtRbvGOr95cqRbpuKbvQCqRr8uNmuCYoFu%2Bc92LObrLoqGbRdd4c0lkb6hzPLCR0MIzztcAGOqcBOk1W0%2FJ78QPzh79xe%2BoHgtmH950w2jGU%2FHiDYo4udrBtMABIt%2BprFOgpL8FgIZSBapyy943E%2FHtQ5EJsPZ2G%2BFd%2FsfXaPXH2l%2FQy%2B2ztxgJeNECgxH54nVi4vvCfXPBd%2FFibF61Z3gzawrAeubmeNWIoIDA1SxcqpiqTg%2FrKQHwDbL8D8ZR%2BOpsbuiGDYkdL2AtW97i878FD5OYMS9%2FqVvC16o2wyFc%3D&Expires=1745730646';
  }  
}
