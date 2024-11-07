import { josa } from 'es-hangul'

const MESSAGES = {
  EMAIL_FORMAT_ERROR: '올바른 이메일 형식이 아닙니다.',
  PASSWORD_NOT_MATCH: '비밀번호가 일치하지 않습니다.',
  reqFieldMessage: (field: string) => `${josa(field, '을/를')} 입력해주세요.`,
  reqLengthMessage: (field: string, minLength: number) => `${josa(field, '을/를')} ${minLength}자 이상 입력해주세요.`,
}

export default MESSAGES
