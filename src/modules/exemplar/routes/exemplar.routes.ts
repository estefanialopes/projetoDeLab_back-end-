import { Router } from 'express'
import { ExemplarController } from '@modules/exemplar/controller'
import { celebrate, Joi, Segments } from 'celebrate'
import { isAuthenticated } from '@shared/http/middlewares/AuthMiddleware'

export const exemplarRouter = Router()
const exemplarController = new ExemplarController()

exemplarRouter.get('/', isAuthenticated, exemplarController.getExemplars)

exemplarRouter.get(
  '/:id',
  isAuthenticated,
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.string().required()
    }
  }),
  exemplarController.getExemplar
)

exemplarRouter.get(
  'exemplares-disponiveis/:idLivro',
  isAuthenticated,
  celebrate({
    [Segments.PARAMS]: {
      idLivro: Joi.number().required()
    }
  }),
  exemplarController.getExemplaresDisponiveis
)

exemplarRouter.post(
  '/',
  isAuthenticated,
  celebrate({
    [Segments.BODY]: {
      idLivro: Joi.string().required(),
      tomboPatrimonial: Joi.string().required(),
      reservado: Joi.number().required(),
    }
  }),
  exemplarController.createExemplar
)

exemplarRouter.put(
  '/:id',
  isAuthenticated,
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.string().required()
    },
    [Segments.BODY]: {
      idLivro: Joi.string().optional(),
      tomboPatrimonial: Joi.string().optional(),
      reservado: Joi.number().optional(),
    }
  }),
  exemplarController.updateExemplar
)

exemplarRouter.delete(
  '/:id',
  isAuthenticated,
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.string().required()
    }
  }),
  exemplarController.deleteExemplar
)

export default exemplarRouter
