import { Router } from 'express'
import { EmprestimoController } from '@modules/emprestimo/controller'
import { celebrate, Joi, Segments } from 'celebrate'
import { isAuthenticated } from '@shared/http/middlewares/AuthMiddleware'

export const emprestimoRouter = Router()
const emprestimoController = new EmprestimoController()

emprestimoRouter.get('/', isAuthenticated, emprestimoController.getEmprestimos)

emprestimoRouter.get(
  '/:id',
  isAuthenticated,
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.number().required()
    }
  }),
  emprestimoController.getEmprestimo
)


emprestimoRouter.post(
  '/',
  isAuthenticated,
  celebrate({
    [Segments.BODY]: {
      idExemplar: Joi.string().required(),
      idUsuario: Joi.string().required(),
      dataEmprestimo: Joi.string().required(),
      dataProgramadaDevolucao: Joi.string().required(),
      dataEntrega: Joi.string().optional(),
      multa: Joi.number().optional()
    }
  }),
  emprestimoController.createEmprestimo
)

emprestimoRouter.put(
  '/:id',
  isAuthenticated,
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.string().required()
    },
    [Segments.BODY]: {
      idExemplar: Joi.string().optional(),
      idUsuario: Joi.string().optional(),
      dataEmprestimo: Joi.string().optional(),
      dataProgramadaDevolucao: Joi.string().optional(),
      dataEntrega: Joi.string().optional(),
      multa: Joi.number().optional()
    }
  }),
  emprestimoController.updateEmprestimo
)

emprestimoRouter.delete(
  '/:id',
  isAuthenticated,
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.string().required()
    }
  }),
  emprestimoController.deleteEmprestimo
)

export default emprestimoRouter
