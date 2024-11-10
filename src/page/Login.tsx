import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/Card'
import { Input } from '@/components/ui/Input'
import { Label } from '@/components/ui/Label'
import { Typography } from '@/components/ui/Typography'
import ROUTERS_CONFIG from '@/constants/router'
import useAuth from '@/hooks/useAuth'
import { signInSchema } from '@/schemas/sign'
import { userService } from '@/services/user/userService'
import { LoginRequest } from '@/types/user'
import { zodResolver } from '@hookform/resolvers/zod'
import { useMutation } from '@tanstack/react-query'
import { SubmitHandler, useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import { z } from 'zod'

const Login = () => {
  const { login } = useAuth()

  const { mutate: loginMutate } = useMutation({
    mutationFn: (params: LoginRequest) => userService.login(params),
  })

  const {
    register,
    handleSubmit: handleFormSubmit,
    formState: { errors, isValid },
  } = useForm<z.infer<typeof signInSchema>>({
    resolver: zodResolver(signInSchema),
    mode: 'all',
  })

  const handleSubmit: SubmitHandler<z.infer<typeof signInSchema>> = async (data) => {
    loginMutate(
      { ...data },
      {
        onSuccess: (res) => {
          login(res.token)
        },
        onError: (error) => {
          console.log(error)
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
                로그인
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
              <Input id="password" placeholder="비밀번호를 입력해주세요." type="password" {...register('password')} />
              <Typography className="ms-2" variant="error">
                {errors.password?.message}
              </Typography>
            </section>
          </CardContent>
          <CardFooter className="flex flex-col">
            <button disabled={!isValid} className="w-full">
              로그인
            </button>
            <div className="h-4" />
            <Typography variant="mutedText" className="center" asChild>
              <Link to={ROUTERS_CONFIG.SIGNUP}>아직 가입하지 않으셨나요?</Link>
            </Typography>
          </CardFooter>
        </Card>
      </main>
    </form>
  )
}

export default Login
