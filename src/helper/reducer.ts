export type ActionBase<TAction, TPayload = void> = TPayload extends void
  ? { type: TAction }
  : { type: TAction; payload: TPayload };
