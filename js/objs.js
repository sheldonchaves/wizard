var wizard = {
    title: 'wizard1',
    steps: [{
        title: 'Aba 1',
        id: 'step1',
        icon: 'fa fa-book',
        enabled: false,
        order: 1,
        forms: [{
            title: 'Form 1-1',
            id: 'form1-1',
            url: '#',
            icon: 'fa fa-home',
            enabled: false,
            order: 1,
            items: [
                {  id: 'name', title: 'Nome', type: 'String', value: 'ricardo', required: true }, {
                    group: true,
                    title: 'Group test 1',
                    id: 'group01',
                    items: [
                        {  id: 'age', title: 'idade', type: 'Integer', required: true },
                        {  id: 'points', title: 'pontos', type: 'BigDecimal', required: true },
                        {  id: 'field8', title: 'field8', type: 'Select', value: null, options: [{ key: '1', value: 'valor1' }, { key: '2', value: 'valor2' }], required: true }
                    ]
                }, {
                    group: true,
                    title: 'Group test 2',
                    id: 'group02',
                    items: [
                        {  id: 'test1', title: 'Teste numero 1', type: 'String' },
                        {  id: 'test2', title: 'Teste numero 2', type: 'Integer' },
                        {  id: 'test3', title: 'Teste numero 3', type: 'Integer', visible: 'step1-1#age{10}' }
                    ]
                },
            ]
        }, {
            title: 'Form 1-2',
            id: 'form1-2',
            url: '#',
            icon: 'fa fa-pencil',
            enabled: false,
            order: 2,
            items: [
                {  id: 'field1', title: 'Teste campo 1', type: 'String', required: false },
                {  id: 'field2', title: 'Teste campo 2', type: 'Integer', required: false },
                {  id: 'field3', title: 'Teste campo 3', type: 'BigDecimal', required: false },
                {  id: 'field4', title: 'Teste campo 4', type: 'String', required: true },
                {  id: 'field6', title: 'Teste campo 5', type: 'Integer' },
                {  id: 'field5', title: 'Teste campo 6', type: 'Integer' },
                {  id: 'field7', title: 'Teste campo 7', type: 'Integer' },
                {  id: 'field8', title: 'Teste campo 8', type: 'Integer' }
            ]
        }, {
            title: 'Form 1-3',
            id: 'form1-3',
            url: '#',
            icon: 'fa fa-cog',
            enabled: false,
            order: 3,
            items: [{
                group: true,
                title: 'Group test 3',
                id: 'group03',
                items: [
                    {  id: 'field1', title: 'Teste campo 1', type: 'String', required: true },
                    {  id: 'field3', title: 'Teste campo 2', type: 'Integer' },
                    {  id: 'field4', title: 'Teste campo 3', type: 'Integer' },
                    {  id: 'field2', title: 'Teste campo 4', type: 'Integer' },
                    {  id: 'field5', title: 'Teste campo 5', type: 'Integer' },
                    {  id: 'field6', title: 'Teste campo 6', type: 'Integer' },
                    {  id: 'field7', title: 'Teste campo 7', type: 'Integer' },
                    {  id: 'field8', title: 'Teste campo 8', type: 'Integer' },
                    {  id: 'field9', title: 'Teste campo 9', type: 'Integer' },
                    {  id: 'field10', title: 'Teste campo 10', type: 'Integer' },
                    {  id: 'field11', title: 'Teste campo 11', type: 'Integer' },
                    {  id: 'field12', title: 'Teste campo 12', type: 'Integer' }
                ]
            }, {
                group: true,
                title: 'Group test 4',
                id: 'group04',
                items: [
                    {  id: 'field23', title: 'Teste campo 23', type: 'BigDecimal', required: false },
                    {  id: 'field24', title: 'Teste campo 24', type: 'String', required: false },
                    {  id: 'field25', title: 'Teste campo 25', type: 'Integer', required: false }
                ]
            }, {
                group: true,
                title: 'Group bonito 5',
                id: 'group05',
                visible: 'step1-1#age{10}',
                items: [
                    {  id: 'field16', title: 'Teste campo 16', type: 'Integer' },
                    {  id: 'field17', title: 'Teste campo 17', type: 'Integer', required: true },
                    {  id: 'field20', title: 'Teste campo 20', type: 'Select', value: null, options: [{ key: '1', value: 'valor1' }, { key: '2', value: 'valor2' }], required: true }
                ]
            }, ]
        }]
    }, {
        title: 'Aba 2',
        id: 'step2',
        icon: 'fa fa-briefcase',
        enabled: false,
        order: 2,
        forms: [{
            title: 'Form 2-1',
            id: 'form2-1',
            url: '#',
            icon: 'fa fa-cog',
            enabled: false,
            order: 1,
            items: [
                {  id: 'name1', title: 'nome bonito 1', type: 'String', required: true },
                {  id: 'name2', title: 'nome bonito 2', type: 'String', required: false }, {
                    group: true,
                    title: 'Group para apresentar 6',
                    id: 'group06',
                    items: [
                        {  id: 'age', title: 'idade', type: 'Integer', required: true },
                        {  id: 'points22', title: 'Pontos 22', type: 'BigDecimal', required: false },
                        {  id: 'test1', title: 'Teste Variavel 1', type: 'String' },
                        {  id: 'test3', title: 'Teste Variavel 3', type: 'Integer' }
                    ]
                },
                {  id: 'name30', title: 'Nome campo 30', type: 'String', required: true },
                {  id: 'name40', title: 'Nome campo 40', type: 'String' },
                {  id: 'name50', title: 'Nome campo 50', type: 'String' },
                {  id: 'name60', title: 'Nome campo 60', type: 'String' }
            ]
        }, {
            title: 'Form 2-2',
            id: 'form2-2',
            url: '#',
            icon: 'fa fa-book',
            enabled: false,
            order: 2,
            items: [
                {  id: 'name100', title: 'Nome campo 100', type: 'String', required: true },
                {  id: 'name200', title: 'Nome campo 200', type: 'String', required: false }
            ]
        }]
    }, {
        title: 'Aba 3',
        id: 'step3',
        icon: 'fa fa-university',
        enabled: false,
        order: 3,
        forms: [{
            title: 'Form 3-1',
            id: 'form3-1',
            url: '#',
            icon: 'fa fa-book',
            enabled: false,
            order: 1,
            items: [
                {  id: 'Daniel', title: 'Daniel', type: 'String', required: true },

            ]
        }]
    }, {
        title: 'Aba 4',
        id: 'step4',
        icon: 'fa fa-gavel',
        enabled: false,
        order: 4,
        forms: [{
            title: 'Form 4-1',
            id: 'form4-1',
            url: '#',
            icon: 'fa fa-cog',
            enabled: false,
            order: 1,
            items: [
                {  id: 'Rodrigo1', title: 'Rodrigo1', type: 'String', required: true },
                {  id: 'Rodrigo2', title: 'Rodrigo2', type: 'String', required: false }

            ]
        }]
    }, {
        title: 'Aba 5',
        id: 'step5',
        icon: 'fa fa-building',
        enabled: false,
        order: 5,
        forms: [{
            title: 'Form 5-1',
            id: 'form5-1',
            url: '#',
            icon: 'fa fa-book',
            enabled: false,
            order: 1,
            items: [
                {  id: 'Marcelo1', title: 'Marcelo1', type: 'String', required: true },
                {  id: 'Marcelo2', title: 'Marcelo2', type: 'String', required: false }

            ]
        }]
    }, {
        title: 'Aba 6',
        id: 'step6',
        icon: 'fa fa-flag',
        enabled: false,
        order: 6,
        forms: [{
            title: 'Form 6-1',
            id: 'form6-1',
            url: '#',
            icon: 'fa fa-book',
            enabled: false,
            order: 1,
            items: [
                {  id: 'Ale1', title: 'Ale1', type: 'String', required: true },
                {  id: 'Ale2', title: 'Ale2', type: 'String', required: false }

            ]
        }, {
            title: 'Form 6-2',
            id: 'form6-2',
            url: '#',
            icon: 'fa fa-book',
            enabled: false,
            order: 1,
            items: [
                {  id: 'Ultimo', title: 'Ultimo campo finalmente!', type: 'String', required: true }
            ]
        }]
    }]
};

var usedFields = {};

var models = [{
    'name': 'Licitacao',
    'type': 'class',
    'fields': [{
        'name': 'serialVersionUID',
        'type': 'long'
    }, {
        'name': 'licitacaoId',
        'type': 'java.lang.Integer'
    }, {
        'name': 'adjudicacao',
        'type': 'java.lang.Boolean'
    }, {
        'name': 'amostras',
        'type': 'java.lang.Boolean'
    }, {
        'name': 'anoLicitacao',
        'type': 'java.lang.Integer'
    }, {
        'name': 'anoProcessoAdm',
        'type': 'java.lang.Integer'
    }, {
        'name': 'atestados',
        'type': 'java.lang.Boolean'
    }, {
        'name': 'audienciaPublica',
        'type': 'java.lang.Boolean'
    }, {
        'name': 'autorizacaoSecretaria',
        'type': 'java.lang.Integer'
    }, {
        'name': 'avisoAberturaPreQualificacao',
        'type': 'java.lang.Boolean'
    }, {
        'name': 'beneficio',
        'type': 'java.lang.Integer'
    }, {
        'name': 'bid',
        'type': 'java.lang.Boolean'
    }, {
        'name': 'codigoLicitacao',
        'type': 'java.math.BigDecimal'
    }, {
        'name': 'comissao',
        'type': 'java.lang.Boolean'
    }, {
        'name': 'constaDescricaoTecnica',
        'type': 'java.lang.String'
    }, {
        'name': 'constaExigenciaCertificacao',
        'type': 'java.lang.String'
    }, {
        'name': 'constaFinalidadeAquisicao',
        'type': 'java.lang.String'
    }, {
        'name': 'constaNecessidadeCompatibilidade',
        'type': 'java.lang.String'
    }, {
        'name': 'constaNecessidadeManuais',
        'type': 'java.lang.String'
    }, {
        'name': 'constaNecessidadeSoftware',
        'type': 'java.lang.String'
    }, {
        'name': 'constaNomesMarcas',
        'type': 'java.lang.String'
    }, {
        'name': 'constaSubstituicaoEquipamentos',
        'type': 'java.lang.String'
    }, {
        'name': 'declaracaoDisponibilidadeDoc',
        'type': 'java.lang.Boolean'
    }, {
        'name': 'declaracaoRecursos',
        'type': 'java.lang.Boolean'
    }, {
        'name': 'descricaoJustificativa',
        'type': 'java.lang.String'
    }, {
        'name': 'descricaoObjeto',
        'type': 'java.lang.String'
    }, {
        'name': 'descricaoSituacaoOutra',
        'type': 'java.lang.String'
    }, {
        'name': 'divisaoObjeto',
        'type': 'java.lang.Integer'
    }, {
        'name': 'documentoId',
        'type': 'java.lang.Integer'
    }, {
        'name': 'dtAberturaLicitacao',
        'type': 'java.util.Date'
    }, {
        'name': 'dtAdjudicacao',
        'type': 'java.util.Date'
    }, {
        'name': 'dtAtaAberturaJulgamento',
        'type': 'java.util.Date'
    }, {
        'name': 'dtAtaAberturaJulgamentoProposta',
        'type': 'java.util.Date'
    }, {
        'name': 'dtAtaJulgamentoDocHabilitacao',
        'type': 'java.util.Date'
    }, {
        'name': 'dtAtaJulgamentoDocHabilitacaoProposta',
        'type': 'java.util.Date'
    }, {
        'name': 'dtAudienciaPublica',
        'type': 'java.util.Date'
    }, {
        'name': 'dtJulgamento',
        'type': 'java.util.Date'
    }, {
        'name': 'dtMudancaStatus',
        'type': 'java.sql.Timestamp'
    }, {
        'name': 'dtPropostas',
        'type': 'java.util.Date'
    }, {
        'name': 'dtRatificacao',
        'type': 'java.util.Date'
    }, {
        'name': 'dtSituacao',
        'type': 'java.util.Date'
    }, {
        'name': 'editalFasePreQualificacao',
        'type': 'java.lang.Boolean'
    }, {
        'name': 'editalSegundaFase',
        'type': 'java.lang.Boolean'
    }, {
        'name': 'entidadeId',
        'type': 'java.lang.Integer'
    }, {
        'name': 'existeQuadroComparativo',
        'type': 'java.lang.Boolean'
    }, {
        'name': 'existemIndicesEconomicos',
        'type': 'java.lang.Boolean'
    }, {
        'name': 'existemLicitantes',
        'type': 'java.lang.Boolean'
    }, {
        'name': 'flsAdjudicacao',
        'type': 'java.lang.String'
    }, {
        'name': 'flsAmostras',
        'type': 'java.lang.String'
    }, {
        'name': 'flsAudienciaPublica',
        'type': 'java.lang.String'
    }, {
        'name': 'flsAutorizacao',
        'type': 'java.lang.String'
    }, {
        'name': 'flsAvisoAberturaPreQualificacao',
        'type': 'java.lang.String'
    }, {
        'name': 'flsDataAberturaLicitacao',
        'type': 'java.lang.String'
    }, {
        'name': 'flsDataEntregaProposta',
        'type': 'java.lang.String'
    }, {
        'name': 'flsDataJulgamento',
        'type': 'java.lang.String'
    }, {
        'name': 'flsDeclaracaoDisponibilidadeDoc',
        'type': 'java.lang.String'
    }, {
        'name': 'flsDescricaoJustificativa',
        'type': 'java.lang.String'
    }, {
        'name': 'flsEditalFasePreQualificacao',
        'type': 'java.lang.String'
    }, {
        'name': 'flsEditalSegundaFase',
        'type': 'java.lang.String'
    }, {
        'name': 'flsJulgamento',
        'type': 'java.lang.String'
    }, {
        'name': 'flsJulgamentoDocHabilitacao',
        'type': 'java.lang.String'
    }, {
        'name': 'flsJulgamentoDocHabilitacaoProposta',
        'type': 'java.lang.String'
    }, {
        'name': 'flsJulgamentoFasePreQualificacao',
        'type': 'java.lang.String'
    }, {
        'name': 'flsJulgamentoNegociacaoFinal',
        'type': 'java.lang.String'
    }, {
        'name': 'flsJulgamentoProposta',
        'type': 'java.lang.String'
    }, {
        'name': 'flsJulgamentoPropostasTecnicas',
        'type': 'java.lang.String'
    }, {
        'name': 'flsModalidade',
        'type': 'java.lang.String'
    }, {
        'name': 'flsParecerTecnicoJuridico',
        'type': 'java.lang.String'
    }, {
        'name': 'flsQuadroComparativo',
        'type': 'java.lang.String'
    }, {
        'name': 'flsRatificacao',
        'type': 'java.lang.String'
    }, {
        'name': 'flsSessaoPublicaJulgamento',
        'type': 'java.lang.String'
    }, {
        'name': 'homologacao',
        'type': 'java.lang.Boolean'
    }, {
        'name': 'houveDataAberturaLicitacao',
        'type': 'java.lang.Boolean'
    }, {
        'name': 'houveDataEntregaProposta',
        'type': 'java.lang.Boolean'
    }, {
        'name': 'houveDataJulgamento',
        'type': 'java.lang.Boolean'
    }, {
        'name': 'houveSessaoPublicaJulgamento',
        'type': 'java.lang.Boolean'
    }, {
        'name': 'itemAmostras',
        'type': 'java.lang.Integer'
    }, {
        'name': 'julgamento',
        'type': 'java.lang.Boolean'
    }, {
        'name': 'julgamentoFasePreQualificacao',
        'type': 'java.lang.Boolean'
    }, {
        'name': 'julgamentoNegociacaoFinal',
        'type': 'java.lang.Boolean'
    }, {
        'name': 'julgamentoProposta',
        'type': 'java.lang.Boolean'
    }, {
        'name': 'julgamentoPropostasTecnicas',
        'type': 'java.lang.Boolean'
    }, {
        'name': 'julgamentoRecursos',
        'type': 'java.lang.Boolean'
    }, {
        'name': 'julgamentoRecursosHouveProcedimentoAta',
        'type': 'java.lang.Boolean'
    }, {
        'name': 'julgamentoRecursosHouveProcedimentoAtaProposta',
        'type': 'java.lang.Boolean'
    }, {
        'name': 'lei13121',
        'type': 'java.lang.Boolean'
    }, {
        'name': 'modLicitacaoOutros',
        'type': 'java.lang.String'
    }, {
        'name': 'numeroLicitacao',
        'type': 'java.lang.String'
    }, {
        'name': 'numeroProcessoAdm',
        'type': 'java.lang.String'
    }, {
        'name': 'objeto',
        'type': 'java.lang.Integer'
    }, {
        'name': 'parecerTecnicoJuridico',
        'type': 'java.lang.Boolean'
    }, {
        'name': 'permiteParticipantes',
        'type': 'java.lang.Boolean'
    }, {
        'name': 'posicaoUltimaAbaPreenchida',
        'type': 'java.lang.Integer'
    }, {
        'name': 'quitacaoTributos',
        'type': 'java.lang.Boolean'
    }, {
        'name': 'ratificacao',
        'type': 'java.lang.Boolean'
    }, {
        'name': 'status',
        'type': 'java.lang.String'
    }, {
        'name': 'subcontratacao',
        'type': 'java.lang.Boolean'
    }, {
        'name': 'tipoLicitacao',
        'type': 'java.lang.Integer'
    }, {
        'name': 'tipoPrestacao',
        'type': 'java.lang.Boolean'
    }, {
        'name': 'tributosEstaduais',
        'type': 'java.lang.Boolean'
    }, {
        'name': 'tributosFederais',
        'type': 'java.lang.Boolean'
    }, {
        'name': 'tributosMunicipais',
        'type': 'java.lang.Boolean'
    }, {
        'name': 'valorTotal',
        'type': 'java.math.BigDecimal'
    }, {
        'name': 'licitacaoModalidade',
        'type': 'class',
        'class': 'br.com.linkapp.dao.domain.model.LicitacaoModalidade',
        'props': {
            'name': 'LicitacaoModalidade',
            'type': 'class',
            'fields': [{
                'name': 'serialVersionUID',
                'type': 'long'
            }, {
                'name': 'licitacaoModalidadeId',
                'type': 'java.lang.Integer'
            }, {
                'name': 'descricao',
                'type': 'java.lang.String'
            }, {
                'name': 'licitacaos',
                'type': 'java.util.List',
                'class': 'br.com.linkapp.dao.domain.model.Licitacao'
            }],
            'class': 'br.com.linkapp.dao.domain.model.LicitacaoModalidade',
            'hash': 'E68AC3A3CAE02942E183B7CD351C81C4'
        }
    }, {
        'name': 'licitacaoLicitacaoEditals',
        'type': 'java.util.List',
        'class': 'br.com.linkapp.dao.domain.model.LicitacaoLicitacaoEdital'
    }, {
        'name': 'licitacaoLicitacaoHomologacaos',
        'type': 'java.util.List',
        'class': 'br.com.linkapp.dao.domain.model.LicitacaoLicitacaoHomologacao'
    }, {
        'name': 'licitacaoLicitacaoIndiceEconomicos',
        'type': 'java.util.List',
        'class': 'br.com.linkapp.dao.domain.model.LicitacaoLicitacaoIndiceEconomico'
    }, {
        'name': 'licitacaoLicitacaoRecursos',
        'type': 'java.util.List',
        'class': 'br.com.linkapp.dao.domain.model.LicitacaoLicitacaoRecurso'
    }, {
        'name': 'licitacaoAdesaoAtaRegistros',
        'type': 'java.util.List',
        'class': 'br.com.linkapp.dao.domain.model.LicitacaoAdesaoAtaRegistro'
    }, {
        'name': 'licitacaoAtaRecebimentoJulgamentos',
        'type': 'java.util.List',
        'class': 'br.com.linkapp.dao.domain.model.LicitacaoAtaRecebimentoJulgamento'
    }, {
        'name': 'licitacaoComissaos',
        'type': 'java.util.List',
        'class': 'br.com.linkapp.dao.domain.model.LicitacaoComissao'
    }, {
        'name': 'licitacaoContratacaoDiretas',
        'type': 'java.util.List',
        'class': 'br.com.linkapp.dao.domain.model.LicitacaoContratacaoDireta'
    }, {
        'name': 'licitacaoCredenciamentos',
        'type': 'java.util.List',
        'class': 'br.com.linkapp.dao.domain.model.LicitacaoCredenciamento'
    }, {
        'name': 'licitacaoDeclaracaoRecursos',
        'type': 'java.util.List',
        'class': 'br.com.linkapp.dao.domain.model.LicitacaoDeclaracaoRecurso'
    }, {
        'name': 'licitacaoImportadas',
        'type': 'java.util.List',
        'class': 'br.com.linkapp.dao.domain.model.LicitacaoImportada'
    }, {
        'name': 'licitacaoLicitantes',
        'type': 'java.util.List',
        'class': 'br.com.linkapp.dao.domain.model.LicitacaoLicitante'
    }, {
        'name': 'licitacaoLotes',
        'type': 'java.util.List',
        'class': 'br.com.linkapp.dao.domain.model.LicitacaoLote'
    }, {
        'name': 'licitacaoLrfs',
        'type': 'java.util.List',
        'class': 'br.com.linkapp.dao.domain.model.LicitacaoLrf'
    }, {
        'name': 'licitacaoPreQualificacaos',
        'type': 'java.util.List',
        'class': 'br.com.linkapp.dao.domain.model.LicitacaoPreQualificacao'
    }, {
        'name': 'licitacaoVisitaTecnicas',
        'type': 'java.util.List',
        'class': 'br.com.linkapp.dao.domain.model.LicitacaoVisitaTecnica'
    }],
    'class': 'br.com.linkapp.dao.domain.model.Licitacao',
    'hash': 'D84CC34452B6D2AE098F381B811BC59B'
}];
