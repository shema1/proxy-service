import { All, Controller, Req } from '@nestjs/common';
import { Request } from 'express';
import { ProxyService } from './proxy.service';

@Controller('proxy')
export class ProxyController {
  constructor(private readonly proxyService: ProxyService) {}

  @All('*')
  async handleProxy(@Req() req: Request) {
    const targetUrl = req.query.url;
    return this.proxyService.proxyRequest(req, targetUrl as string);
  }
}
