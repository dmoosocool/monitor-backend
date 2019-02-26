import * as Joi from 'joi';
import {EnvConfig} from '../config';

export class ConfigValidate {
  static validateInput(envConfig: EnvConfig): EnvConfig {
    const envVarsSchema: Joi.ObjectSchema = Joi.object({

      /** 系统配置验证 */
      // 开发环境
      NODE_ENV: Joi.string()
        .valid(['development', 'production', 'test'])
        .default('development'),
      // 端口
      PORT: Joi.number().default(3000),
      // 主机名
      HOST: Joi.string().default('localhost'),
      // 超级管理员.
      SUPER_ADMIN: Joi.string().empty('').default('super_admin'),
      // 静态服务器
      STATIC_HOST: Joi.string().empty('').default(''),
      // 是否压缩静态资源
      MINI_ASSETS: Joi.boolean().default(false),
      // Session秘钥
      SESSION_SECRET: Joi.string().required(),
      // 认证cookie名称
      AUTH_COOKIE_NAME: Joi.string().required(),

      /** redis配置验证 */
      // Redis主机名
      REDIS_HOST: Joi.string().hostname().default('127.0.0.1'),
      // Redis端口
      REDIS_PORT: Joi.number().default(6379),
      // Redis密码
      REDIS_PASSWORD: Joi.string().empty().default(''),
      // Redis数据库
      REDIS_DB: Joi.number().default(0),
    });

    const { error, value: validatedEnvConfig } = Joi.validate(
      envConfig,
      envVarsSchema,
    );

    return validatedEnvConfig;
  }
}
