import { Router } from 'express'
import { UsuarioController } from '@modules/usuario/controllers'
import { celebrate, Joi, Segments } from 'celebrate'
import { isAuthenticated } from '@shared/http/middlewares/AuthMiddleware'

export const usuarioRouter = Router()
const usuarioController = new UsuarioController()

usuarioRouter.get('/', isAuthenticated, usuarioController.getUsuarios)

usuarioRouter.get(
  '/:id',
  isAuthenticated,
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.string().required()
    }
  }),
  usuarioController.getUsuario
)

usuarioRouter.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      nome: Joi.string().required(),
      email: Joi.string().email().required().messages({ 'string.email': 'Formato de email inválido.' }),
      senha: Joi.string().required(),
      endereco: Joi.string().required(),
      dataNascimento: Joi.date().optional()
    }
  }),
  usuarioController.createUsuario
)

usuarioRouter.put(
  '/:id',
  isAuthenticated,
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.number().required()
    },
    [Segments.BODY]: {
      nome: Joi.string().optional(),
      sobrenome: Joi.string().optional(),
      permissao: Joi.string().optional(),
      email: Joi.string().email().optional()
    }
  }),
  usuarioController.updateUsuario
)

usuarioRouter.delete(
  '/:id',
  isAuthenticated,
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.number().required()
    }
  }),
  usuarioController.deleteUsuario
)

export default usuarioRouter
