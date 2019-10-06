export default {
  extensions: {
    Blockquote: {
      buttons: {
        blockquote: {
          tooltip: 'Bloc de citation'
        }
      }
    },
    Bold: {
      buttons: {
        bold: {
          tooltip: 'Gras'
        }
      }
    },
    BulletList: {
      buttons: {
        bulletList: {
          tooltip: 'Liste à puce'
        }
      }
    },
    Code: {
      buttons: {
        code: {
          tooltip: 'Code'
        }
      }
    },
    CodeBlock: {
      buttons: {
        codeBlock: {
          tooltip: 'Bloc de code'
        }
      }
    },
    History: {
      buttons: {
        undo: {
          tooltip: 'Annuler'
        },
        redo: {
          tooltip: 'Rétablir'
        }
      }
    },
    HorizontalRule: {
      buttons: {
        horizontalRule: {
          tooltip: 'Ligne horizontale'
        }
      }
    },
    Italic: {
      buttons: {
        italic: {
          tooltip: 'Italique'
        }
      }
    },
    OrderedList: {
      buttons: {
        orderedList: {
          tooltip: 'Liste ordonnée'
        }
      }
    },
    Paragraph: {
      buttons: {
        paragraph: {
          tooltip: 'Paragraphe'
        }
      }
    },
    Strike: {
      buttons: {
        strike: {
          tooltip: 'Barré'
        }
      }
    },
    Underline: {
      buttons: {
        underline: {
          tooltip: 'Souligné'
        }
      }
    },
    Heading: {
      buttons: {
        heading: {
          tooltip: args => args.level + ' niveau de titre'
        }
      }
    },
    Link: {
      buttons: {
        isActive: {
          tooltip: 'Mise à jour du lien'
        },
        notActive: {
          tooltip: 'Ajouter un lien'
        }
      },
      window: {
        title: 'Contrôle de lien',
        form: {
          hrefLabel: 'Href'
        },
        buttons: {
          close: 'Proche',
          remove: 'Retirer',
          apply: 'Appliquer'
        }
      }
    }
  }
}