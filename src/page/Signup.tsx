import { Button } from '@/components/ui/Button'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/Card'
import { Input } from '@/components/ui/Input'
import { Typography } from '@/components/ui/Typography'
import ROUTERS_CONFIG from '@/constants/router'
import { signUpSchema } from '@/schemas/sign'
import { UserService } from '@/services/user/userService'
import { SignUpRequest } from '@/types/user'
import { zodResolver } from '@hookform/resolvers/zod'
import { Label } from '@radix-ui/react-label'
import { useMutation } from '@tanstack/react-query'
import { SubmitHandler, useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import { z } from 'zod'

const Signup = () => {
  const navigate = useNavigate()

  const {
    register,
    handleSubmit: handleFormSubmit,
    trigger,
    formState: { errors, isValid },
    getFieldState,
  } = useForm<z.infer<typeof signUpSchema>>({
    resolver: zodResolver(signUpSchema),
    mode: 'all',
  })

  const { mutate: signUpMutate } = useMutation({
    mutationFn: (params: SignUpRequest) => new UserService().signUp(params),
  })

  const handleSubmit: SubmitHandler<z.infer<typeof signUpSchema>> = async (data) => {
    signUpMutate(
      { ...data },
      {
        onSuccess: () => {
          navigate(ROUTERS_CONFIG.LOGIN)
        },
        onError: (error) => {
          console.error(error)
        },
      },
    )
  }

  return (
    <form onSubmit={handleFormSubmit(handleSubmit)}>
      <main className="flex min-h-screen flex-col items-center justify-center">
        <Card className="h-fit w-full max-w-96">
          <CardHeader>
            <CardTitle>
              <Typography variant="h3" as="p">
                회원가입
              </Typography>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <section className="flex flex-col gap-2">
              <Label htmlFor="email">이메일</Label>
              <Input id="email" placeholder="이메일을 입력해주세요." {...register('email')} />
              <Typography className="ms-2" variant="error">
                {errors.email?.message}
              </Typography>
            </section>
            <div className="h-4" />
            <section className="flex flex-col gap-2">
              <Label htmlFor="password">비밀번호</Label>
              <Input
                id="password"
                placeholder="비밀번호를 입력해주세요."
                type="password"
                {...register('password', {
                  onChange: () => {
                    if (getFieldState('confirmPassword').isDirty) {
                      trigger('confirmPassword')
                    }
                  },
                })}
              />
              <Typography className="ms-2" variant="error">
                {errors.password?.message}
              </Typography>
            </section>
            <div className="h-4" />
            <section className="flex flex-col gap-2">
              <Label htmlFor="password-confirm">비밀번호 재확인</Label>
              <Input
                id="password-confirm"
                placeholder="비밀번호 재확인을 입력해주세요."
                type="password"
                {...register('confirmPassword')}
              />
              <Typography className="ms-2" variant="error">
                {errors.confirmPassword?.message}
              </Typography>
            </section>
          </CardContent>
          <CardFooter className="flex flex-col">
            <Button disabled={!isValid} className="w-full">
              회원가입
            </Button>
            <div className="h-4" />
            <Typography variant="mutedText" className="center" asChild>
              <Link to={ROUTERS_CONFIG.LOGIN}>로그인 하러 가기</Link>
            </Typography>
          </CardFooter>
        </Card>
      </main>
    </form>
  )
}

export default Signup
