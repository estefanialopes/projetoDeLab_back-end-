import { Router } from 'express'
import { celebrate, Joi, Segments } from 'celebrate'
import { SessionController } from '@modules/usuario/controllers'

const sessionRouter = Router()

const sessionController = new SessionController()

sessionRouter.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      email: Joi.string().email().required(),
      senha: Joi.string().required()
    }
  }),
  sessionController.create
)

export default sessionRouter
