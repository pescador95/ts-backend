import { Controller, Get } from "@nestjs/common";

@Controller('health')
export class HealthCheckController {

    @Get()
    async check(): Promise<String> {
        return "I'm alive!";
    }
}