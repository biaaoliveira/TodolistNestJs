import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, ParseIntPipe, Post, Put } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { Tarefa } from "src/tarefa/entities/tarefa.entity";
import { Categoria } from "../entities/categoria.entity";
import { CategoriaService } from "../services/categoria.service";
@ApiTags('Categoria')
@Controller('/categoria')
export class CategoriaController{
    categoriaService: any;
    constructor(private readonly service: CategoriaService){}
    

    @Get()
    @HttpCode(HttpStatus.OK)
    findAll(): Promise<Tarefa[]>{
        return this.service.findAll()
    }

    @Get('/:id')
    @HttpCode(HttpStatus.OK)
    findById(@Param('id', ParseIntPipe) id: number): Promise<Categoria> {
        return this.service.findById(id)
    }

    @Get('/descricao/:descricao')
    @HttpCode(HttpStatus.OK)
    findByNome(@Param('descricao') descricao: string): Promise<Categoria[]>{
        return this.categoriaService.findByDescricao(descricao)
    }

    @Post()
    @HttpCode(HttpStatus.CREATED)
    create(@Body() categoria: Categoria): Promise<Categoria>{
    return this.categoriaService.create(categoria)
    }

    @Put()
    @HttpCode(HttpStatus.OK)
    update(@Body() categoria: Categoria): Promise<Categoria> {
        return this.categoriaService.update(categoria)
    }

    @Delete('/:id')
    @HttpCode(HttpStatus.NO_CONTENT)
    delete(@Param('id', ParseIntPipe)id: number){
        return this.categoriaService.delete(id)
    }
}