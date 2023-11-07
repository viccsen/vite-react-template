/*
 * @Author: Viccsen
 * @Date: 2023-09-11 10:48:22
 * @LastEditTime: 2023-11-07 18:01:52
 * @LastEditors: Viccsen
 * @Description:
 */
import { request } from '@/utils/request'

export type ListProps = {
  p?: number
  s?: number
  groupType?: number
  searchValue?: string
}

export type CreateProps = {
  name: string
  description?: string
  icon?: string
}

export type RemoveProps = {
  id: string | number
}

export type EditProps = CreateProps & RemoveProps

export type AuthResultProps = {
  list: any[]
  total: number
}

/**
 * 通知列表
 * @param param
 * @returns
 */
export const list = async ({ p = 1, s, groupType, searchValue }: ListProps) =>
  request.get<ListProps, AuthResultProps>('/api/quick/1.0/cooperate/group', {
    data: { p, s, groupType, searchValue },
  })

/**
 * 新增通知
 * @param param
 * @returns
 */
export const create = async ({ name, description, icon }: CreateProps) =>
  request.post<CreateProps, AuthResultProps>('/api/quick/1.0/cooperate/group', {
    data: { name, description, icon },
  })

/**
 * 编辑通知
 * @param param
 * @returns
 */
export const edit = async ({ id, name, description, icon }: EditProps) =>
  request.put<CreateProps, AuthResultProps>(
    '/api/quick/1.0/cooperate/group/' + id,
    {
      data: { name, description, icon },
    },
  )

/**
 * 删除通知
 * @param param
 * @returns
 */
export const remove = async ({ id }: RemoveProps) =>
  request.del<CreateProps, AuthResultProps>(
    '/api/quick/1.0/cooperate/group/' + id,
  )
