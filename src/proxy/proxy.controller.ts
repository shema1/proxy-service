import { ProxyService } from './proxy.service';
import { createProxyMiddleware } from 'http-proxy-middleware';
import { All, Controller, Next, Req, Res } from '@nestjs/common';

const proxy = createProxyMiddleware({
  router: (req: any) => {
    return req.query.url as string;
  },
  ignorePath: true,
  changeOrigin: true,
});

@Controller('proxy')
export class ProxyController {
  constructor(private readonly proxyService: ProxyService) {}

  @All()
  get(@Req() req, @Res() res, @Next() next) {
    proxy(req, res, next);
  }
}
