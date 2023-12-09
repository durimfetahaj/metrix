import z from "zod";

export const Conversation = z.object({
  firstParticipantId: z.string(),
  secondParticipantId: z.string(),
});
