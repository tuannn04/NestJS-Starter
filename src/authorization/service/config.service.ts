import {Injectable} from "@nestjs/common";

@Injectable()
export class ConfigService {
    isMultipleLoginSession(): boolean {
        return false;
        const config = process.env.CONFIG_MULTIPLE_LOGIN_SESSION;
        return config === '1' || config === 'true';
    }
}