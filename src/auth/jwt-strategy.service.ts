import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy, ExtractJwt } from 'passport-jwt';
import { jwtConstants } from '../config/jwt.constants';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: jwtConstants.secret,
    });
  }

  async validate(payload: any) {
    // The payload is the decoded JWT payload.
    // You can add logic here to fetch the user from a database
    // based on the payload (e.g., payload.sub for user ID).
    // For this example, we'll just return the payload.
    return { userId: payload.userId, username: payload.username };
  }
}
