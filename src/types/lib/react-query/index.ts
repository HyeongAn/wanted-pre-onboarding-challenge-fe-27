export type OnSuccess<TData, TVariables> = (data: TData, variables: TVariables, context: unknown) => void
export type OnError<TVariables> = (error: unknown, variables: TVariables, context: unknown) => void
export type OnSettled<TData, TVariables> = (
  data: TData | undefined,
  error: unknown | null,
  variables: TVariables,
  context: unknown,
) => void

export interface MutationCallbacks<TData, TVariables> {
  onSuccess?: OnSuccess<TData, TVariables>
  onError?: OnError<TVariables>
  onSettled?: OnSettled<TData, TVariables>
}
