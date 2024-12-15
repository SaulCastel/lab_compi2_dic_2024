{
  "type": "grammar",
  "imports": [],
  "topLevelInitializer": null,
  "initializer": null,
  "rules": [
    {
      "type": "rule",
      "name": "grammar",
      "nameLocation": {
        "source": "grammar/peg.pegjs",
        "start": {
          "offset": 0,
          "line": 1,
          "column": 1
        },
        "end": {
          "offset": 7,
          "line": 1,
          "column": 8
        }
      },
      "expression": {
        "type": "sequence",
        "elements": [
          {
            "type": "one_or_more",
            "expression": {
              "type": "rule_ref",
              "name": "rule",
              "location": {
                "source": "grammar/peg.pegjs",
                "start": {
                  "offset": 12,
                  "line": 2,
                  "column": 5
                },
                "end": {
                  "offset": 16,
                  "line": 2,
                  "column": 9
                }
              },
              "match": 0
            },
            "location": {
              "source": "grammar/peg.pegjs",
              "start": {
                "offset": 12,
                "line": 2,
                "column": 5
              },
              "end": {
                "offset": 17,
                "line": 2,
                "column": 10
              }
            },
            "match": 0
          },
          {
            "type": "rule_ref",
            "name": "_",
            "location": {
              "source": "grammar/peg.pegjs",
              "start": {
                "offset": 18,
                "line": 2,
                "column": 11
              },
              "end": {
                "offset": 19,
                "line": 2,
                "column": 12
              }
            },
            "match": 1
          }
        ],
        "location": {
          "source": "grammar/peg.pegjs",
          "start": {
            "offset": 12,
            "line": 2,
            "column": 5
          },
          "end": {
            "offset": 19,
            "line": 2,
            "column": 12
          }
        },
        "match": 0
      },
      "location": {
        "source": "grammar/peg.pegjs",
        "start": {
          "offset": 0,
          "line": 1,
          "column": 1
        },
        "end": {
          "offset": 20,
          "line": 3,
          "column": 1
        }
      },
      "match": 0,
      "bytecode": [
        5,
        4,
        27,
        1,
        15,
        6,
        3,
        16,
        3,
        10,
        27,
        1,
        6,
        6,
        6,
        3,
        15,
        5,
        3,
        27,
        14,
        11,
        2,
        9,
        6,
        7,
        3
      ]
    },
    {
      "type": "rule",
      "name": "rule",
      "nameLocation": {
        "source": "grammar/peg.pegjs",
        "start": {
          "offset": 21,
          "line": 4,
          "column": 1
        },
        "end": {
          "offset": 25,
          "line": 4,
          "column": 5
        }
      },
      "expression": {
        "type": "sequence",
        "elements": [
          {
            "type": "rule_ref",
            "name": "_",
            "location": {
              "source": "grammar/peg.pegjs",
              "start": {
                "offset": 30,
                "line": 5,
                "column": 5
              },
              "end": {
                "offset": 31,
                "line": 5,
                "column": 6
              }
            },
            "match": 1
          },
          {
            "type": "rule_ref",
            "name": "identifier",
            "location": {
              "source": "grammar/peg.pegjs",
              "start": {
                "offset": 32,
                "line": 5,
                "column": 7
              },
              "end": {
                "offset": 42,
                "line": 5,
                "column": 17
              }
            },
            "match": 0
          },
          {
            "type": "rule_ref",
            "name": "_",
            "location": {
              "source": "grammar/peg.pegjs",
              "start": {
                "offset": 43,
                "line": 5,
                "column": 18
              },
              "end": {
                "offset": 44,
                "line": 5,
                "column": 19
              }
            },
            "match": 1
          },
          {
            "type": "optional",
            "expression": {
              "type": "rule_ref",
              "name": "string",
              "location": {
                "source": "grammar/peg.pegjs",
                "start": {
                  "offset": 45,
                  "line": 5,
                  "column": 20
                },
                "end": {
                  "offset": 51,
                  "line": 5,
                  "column": 26
                }
              },
              "match": 0
            },
            "location": {
              "source": "grammar/peg.pegjs",
              "start": {
                "offset": 45,
                "line": 5,
                "column": 20
              },
              "end": {
                "offset": 52,
                "line": 5,
                "column": 27
              }
            },
            "match": 1
          },
          {
            "type": "rule_ref",
            "name": "_",
            "location": {
              "source": "grammar/peg.pegjs",
              "start": {
                "offset": 53,
                "line": 5,
                "column": 28
              },
              "end": {
                "offset": 54,
                "line": 5,
                "column": 29
              }
            },
            "match": 1
          },
          {
            "type": "literal",
            "value": "=",
            "ignoreCase": false,
            "location": {
              "source": "grammar/peg.pegjs",
              "start": {
                "offset": 55,
                "line": 5,
                "column": 30
              },
              "end": {
                "offset": 58,
                "line": 5,
                "column": 33
              }
            },
            "match": 0
          },
          {
            "type": "rule_ref",
            "name": "_",
            "location": {
              "source": "grammar/peg.pegjs",
              "start": {
                "offset": 59,
                "line": 5,
                "column": 34
              },
              "end": {
                "offset": 60,
                "line": 5,
                "column": 35
              }
            },
            "match": 1
          },
          {
            "type": "rule_ref",
            "name": "choice",
            "location": {
              "source": "grammar/peg.pegjs",
              "start": {
                "offset": 61,
                "line": 5,
                "column": 36
              },
              "end": {
                "offset": 67,
                "line": 5,
                "column": 42
              }
            },
            "match": 0
          },
          {
            "type": "optional",
            "expression": {
              "type": "group",
              "expression": {
                "type": "sequence",
                "elements": [
                  {
                    "type": "rule_ref",
                    "name": "_",
                    "location": {
                      "source": "grammar/peg.pegjs",
                      "start": {
                        "offset": 69,
                        "line": 5,
                        "column": 44
                      },
                      "end": {
                        "offset": 70,
                        "line": 5,
                        "column": 45
                      }
                    },
                    "match": 1
                  },
                  {
                    "type": "literal",
                    "value": ";",
                    "ignoreCase": false,
                    "location": {
                      "source": "grammar/peg.pegjs",
                      "start": {
                        "offset": 71,
                        "line": 5,
                        "column": 46
                      },
                      "end": {
                        "offset": 74,
                        "line": 5,
                        "column": 49
                      }
                    },
                    "match": 0
                  }
                ],
                "location": {
                  "source": "grammar/peg.pegjs",
                  "start": {
                    "offset": 69,
                    "line": 5,
                    "column": 44
                  },
                  "end": {
                    "offset": 74,
                    "line": 5,
                    "column": 49
                  }
                },
                "match": 0
              },
              "location": {
                "source": "grammar/peg.pegjs",
                "start": {
                  "offset": 68,
                  "line": 5,
                  "column": 43
                },
                "end": {
                  "offset": 75,
                  "line": 5,
                  "column": 50
                }
              },
              "match": 0
            },
            "location": {
              "source": "grammar/peg.pegjs",
              "start": {
                "offset": 68,
                "line": 5,
                "column": 43
              },
              "end": {
                "offset": 76,
                "line": 5,
                "column": 51
              }
            },
            "match": 1
          }
        ],
        "location": {
          "source": "grammar/peg.pegjs",
          "start": {
            "offset": 30,
            "line": 5,
            "column": 5
          },
          "end": {
            "offset": 76,
            "line": 5,
            "column": 51
          }
        },
        "match": 0
      },
      "location": {
        "source": "grammar/peg.pegjs",
        "start": {
          "offset": 21,
          "line": 4,
          "column": 1
        },
        "end": {
          "offset": 77,
          "line": 6,
          "column": 1
        }
      },
      "match": 0,
      "bytecode": [
        5,
        27,
        14,
        27,
        13,
        15,
        66,
        4,
        27,
        14,
        27,
        10,
        14,
        2,
        0,
        6,
        2,
        27,
        14,
        18,
        0,
        2,
        2,
        22,
        0,
        23,
        0,
        15,
        40,
        4,
        27,
        14,
        27,
        2,
        15,
        29,
        4,
        5,
        27,
        14,
        18,
        1,
        2,
        2,
        22,
        1,
        23,
        1,
        15,
        3,
        4,
        11,
        2,
        9,
        8,
        2,
        7,
        3,
        14,
        2,
        0,
        6,
        2,
        11,
        9,
        9,
        8,
        8,
        7,
        3,
        8,
        6,
        7,
        3,
        8,
        2,
        7,
        3
      ]
    },
    {
      "type": "rule",
      "name": "choice",
      "nameLocation": {
        "source": "grammar/peg.pegjs",
        "start": {
          "offset": 80,
          "line": 7,
          "column": 1
        },
        "end": {
          "offset": 86,
          "line": 7,
          "column": 7
        }
      },
      "expression": {
        "type": "sequence",
        "elements": [
          {
            "type": "rule_ref",
            "name": "concatenation",
            "location": {
              "source": "grammar/peg.pegjs",
              "start": {
                "offset": 91,
                "line": 8,
                "column": 5
              },
              "end": {
                "offset": 104,
                "line": 8,
                "column": 18
              }
            },
            "match": 0
          },
          {
            "type": "zero_or_more",
            "expression": {
              "type": "group",
              "expression": {
                "type": "sequence",
                "elements": [
                  {
                    "type": "rule_ref",
                    "name": "_",
                    "location": {
                      "source": "grammar/peg.pegjs",
                      "start": {
                        "offset": 106,
                        "line": 8,
                        "column": 20
                      },
                      "end": {
                        "offset": 107,
                        "line": 8,
                        "column": 21
                      }
                    },
                    "match": 1
                  },
                  {
                    "type": "literal",
                    "value": "/",
                    "ignoreCase": false,
                    "location": {
                      "source": "grammar/peg.pegjs",
                      "start": {
                        "offset": 108,
                        "line": 8,
                        "column": 22
                      },
                      "end": {
                        "offset": 111,
                        "line": 8,
                        "column": 25
                      }
                    },
                    "match": 0
                  },
                  {
                    "type": "rule_ref",
                    "name": "_",
                    "location": {
                      "source": "grammar/peg.pegjs",
                      "start": {
                        "offset": 112,
                        "line": 8,
                        "column": 26
                      },
                      "end": {
                        "offset": 113,
                        "line": 8,
                        "column": 27
                      }
                    },
                    "match": 1
                  },
                  {
                    "type": "rule_ref",
                    "name": "concatenation",
                    "location": {
                      "source": "grammar/peg.pegjs",
                      "start": {
                        "offset": 114,
                        "line": 8,
                        "column": 28
                      },
                      "end": {
                        "offset": 127,
                        "line": 8,
                        "column": 41
                      }
                    },
                    "match": 0
                  }
                ],
                "location": {
                  "source": "grammar/peg.pegjs",
                  "start": {
                    "offset": 106,
                    "line": 8,
                    "column": 20
                  },
                  "end": {
                    "offset": 127,
                    "line": 8,
                    "column": 41
                  }
                },
                "match": 0
              },
              "location": {
                "source": "grammar/peg.pegjs",
                "start": {
                  "offset": 105,
                  "line": 8,
                  "column": 19
                },
                "end": {
                  "offset": 128,
                  "line": 8,
                  "column": 42
                }
              },
              "match": 0
            },
            "location": {
              "source": "grammar/peg.pegjs",
              "start": {
                "offset": 105,
                "line": 8,
                "column": 19
              },
              "end": {
                "offset": 129,
                "line": 8,
                "column": 43
              }
            },
            "match": 1
          }
        ],
        "location": {
          "source": "grammar/peg.pegjs",
          "start": {
            "offset": 91,
            "line": 8,
            "column": 5
          },
          "end": {
            "offset": 129,
            "line": 8,
            "column": 43
          }
        },
        "match": 0
      },
      "location": {
        "source": "grammar/peg.pegjs",
        "start": {
          "offset": 80,
          "line": 7,
          "column": 1
        },
        "end": {
          "offset": 130,
          "line": 9,
          "column": 1
        }
      },
      "match": 0,
      "bytecode": [
        5,
        27,
        3,
        15,
        72,
        3,
        4,
        5,
        27,
        14,
        18,
        2,
        2,
        2,
        22,
        2,
        23,
        2,
        15,
        14,
        4,
        27,
        14,
        27,
        3,
        15,
        3,
        4,
        11,
        4,
        9,
        8,
        4,
        7,
        3,
        8,
        2,
        7,
        3,
        16,
        33,
        10,
        5,
        27,
        14,
        18,
        2,
        2,
        2,
        22,
        2,
        23,
        2,
        15,
        14,
        4,
        27,
        14,
        27,
        3,
        15,
        3,
        4,
        11,
        4,
        9,
        8,
        4,
        7,
        3,
        8,
        2,
        7,
        3,
        6,
        11,
        2,
        9,
        6,
        7,
        3
      ]
    },
    {
      "type": "rule",
      "name": "concatenation",
      "nameLocation": {
        "source": "grammar/peg.pegjs",
        "start": {
          "offset": 131,
          "line": 10,
          "column": 1
        },
        "end": {
          "offset": 144,
          "line": 10,
          "column": 14
        }
      },
      "expression": {
        "type": "sequence",
        "elements": [
          {
            "type": "rule_ref",
            "name": "pluck",
            "location": {
              "source": "grammar/peg.pegjs",
              "start": {
                "offset": 149,
                "line": 11,
                "column": 5
              },
              "end": {
                "offset": 154,
                "line": 11,
                "column": 10
              }
            },
            "match": 0
          },
          {
            "type": "zero_or_more",
            "expression": {
              "type": "group",
              "expression": {
                "type": "sequence",
                "elements": [
                  {
                    "type": "rule_ref",
                    "name": "_",
                    "location": {
                      "source": "grammar/peg.pegjs",
                      "start": {
                        "offset": 156,
                        "line": 11,
                        "column": 12
                      },
                      "end": {
                        "offset": 157,
                        "line": 11,
                        "column": 13
                      }
                    },
                    "match": 1
                  },
                  {
                    "type": "rule_ref",
                    "name": "pluck",
                    "location": {
                      "source": "grammar/peg.pegjs",
                      "start": {
                        "offset": 158,
                        "line": 11,
                        "column": 14
                      },
                      "end": {
                        "offset": 163,
                        "line": 11,
                        "column": 19
                      }
                    },
                    "match": 0
                  },
                  {
                    "type": "simple_not",
                    "expression": {
                      "type": "group",
                      "expression": {
                        "type": "sequence",
                        "elements": [
                          {
                            "type": "rule_ref",
                            "name": "_",
                            "location": {
                              "source": "grammar/peg.pegjs",
                              "start": {
                                "offset": 166,
                                "line": 11,
                                "column": 22
                              },
                              "end": {
                                "offset": 167,
                                "line": 11,
                                "column": 23
                              }
                            },
                            "match": 1
                          },
                          {
                            "type": "optional",
                            "expression": {
                              "type": "rule_ref",
                              "name": "string",
                              "location": {
                                "source": "grammar/peg.pegjs",
                                "start": {
                                  "offset": 168,
                                  "line": 11,
                                  "column": 24
                                },
                                "end": {
                                  "offset": 174,
                                  "line": 11,
                                  "column": 30
                                }
                              },
                              "match": 0
                            },
                            "location": {
                              "source": "grammar/peg.pegjs",
                              "start": {
                                "offset": 168,
                                "line": 11,
                                "column": 24
                              },
                              "end": {
                                "offset": 175,
                                "line": 11,
                                "column": 31
                              }
                            },
                            "match": 1
                          },
                          {
                            "type": "rule_ref",
                            "name": "_",
                            "location": {
                              "source": "grammar/peg.pegjs",
                              "start": {
                                "offset": 176,
                                "line": 11,
                                "column": 32
                              },
                              "end": {
                                "offset": 177,
                                "line": 11,
                                "column": 33
                              }
                            },
                            "match": 1
                          },
                          {
                            "type": "literal",
                            "value": "=",
                            "ignoreCase": false,
                            "location": {
                              "source": "grammar/peg.pegjs",
                              "start": {
                                "offset": 178,
                                "line": 11,
                                "column": 34
                              },
                              "end": {
                                "offset": 181,
                                "line": 11,
                                "column": 37
                              }
                            },
                            "match": 0
                          }
                        ],
                        "location": {
                          "source": "grammar/peg.pegjs",
                          "start": {
                            "offset": 166,
                            "line": 11,
                            "column": 22
                          },
                          "end": {
                            "offset": 181,
                            "line": 11,
                            "column": 37
                          }
                        },
                        "match": 0
                      },
                      "location": {
                        "source": "grammar/peg.pegjs",
                        "start": {
                          "offset": 165,
                          "line": 11,
                          "column": 21
                        },
                        "end": {
                          "offset": 182,
                          "line": 11,
                          "column": 38
                        }
                      },
                      "match": 0
                    },
                    "location": {
                      "source": "grammar/peg.pegjs",
                      "start": {
                        "offset": 164,
                        "line": 11,
                        "column": 20
                      },
                      "end": {
                        "offset": 182,
                        "line": 11,
                        "column": 38
                      }
                    },
                    "match": 0
                  }
                ],
                "location": {
                  "source": "grammar/peg.pegjs",
                  "start": {
                    "offset": 156,
                    "line": 11,
                    "column": 12
                  },
                  "end": {
                    "offset": 182,
                    "line": 11,
                    "column": 38
                  }
                },
                "match": 0
              },
              "location": {
                "source": "grammar/peg.pegjs",
                "start": {
                  "offset": 155,
                  "line": 11,
                  "column": 11
                },
                "end": {
                  "offset": 183,
                  "line": 11,
                  "column": 39
                }
              },
              "match": 0
            },
            "location": {
              "source": "grammar/peg.pegjs",
              "start": {
                "offset": 155,
                "line": 11,
                "column": 11
              },
              "end": {
                "offset": 184,
                "line": 11,
                "column": 40
              }
            },
            "match": 1
          }
        ],
        "location": {
          "source": "grammar/peg.pegjs",
          "start": {
            "offset": 149,
            "line": 11,
            "column": 5
          },
          "end": {
            "offset": 184,
            "line": 11,
            "column": 40
          }
        },
        "match": 0
      },
      "location": {
        "source": "grammar/peg.pegjs",
        "start": {
          "offset": 131,
          "line": 10,
          "column": 1
        },
        "end": {
          "offset": 185,
          "line": 12,
          "column": 1
        }
      },
      "match": 0,
      "bytecode": [
        5,
        27,
        4,
        15,
        136,
        3,
        4,
        5,
        27,
        14,
        27,
        4,
        15,
        52,
        4,
        5,
        28,
        5,
        27,
        14,
        27,
        10,
        14,
        2,
        0,
        6,
        2,
        27,
        14,
        18,
        0,
        2,
        2,
        22,
        0,
        23,
        0,
        15,
        3,
        4,
        11,
        4,
        9,
        8,
        4,
        7,
        3,
        29,
        14,
        3,
        3,
        6,
        6,
        1,
        6,
        7,
        3,
        15,
        3,
        4,
        11,
        3,
        9,
        8,
        3,
        7,
        3,
        8,
        2,
        7,
        3,
        16,
        65,
        10,
        5,
        27,
        14,
        27,
        4,
        15,
        52,
        4,
        5,
        28,
        5,
        27,
        14,
        27,
        10,
        14,
        2,
        0,
        6,
        2,
        27,
        14,
        18,
        0,
        2,
        2,
        22,
        0,
        23,
        0,
        15,
        3,
        4,
        11,
        4,
        9,
        8,
        4,
        7,
        3,
        29,
        14,
        3,
        3,
        6,
        6,
        1,
        6,
        7,
        3,
        15,
        3,
        4,
        11,
        3,
        9,
        8,
        3,
        7,
        3,
        8,
        2,
        7,
        3,
        6,
        11,
        2,
        9,
        6,
        7,
        3
      ]
    },
    {
      "type": "rule",
      "name": "pluck",
      "nameLocation": {
        "source": "grammar/peg.pegjs",
        "start": {
          "offset": 186,
          "line": 13,
          "column": 1
        },
        "end": {
          "offset": 191,
          "line": 13,
          "column": 6
        }
      },
      "expression": {
        "type": "sequence",
        "elements": [
          {
            "type": "optional",
            "expression": {
              "type": "literal",
              "value": "@",
              "ignoreCase": false,
              "location": {
                "source": "grammar/peg.pegjs",
                "start": {
                  "offset": 196,
                  "line": 14,
                  "column": 5
                },
                "end": {
                  "offset": 199,
                  "line": 14,
                  "column": 8
                }
              },
              "match": 0
            },
            "location": {
              "source": "grammar/peg.pegjs",
              "start": {
                "offset": 196,
                "line": 14,
                "column": 5
              },
              "end": {
                "offset": 200,
                "line": 14,
                "column": 9
              }
            },
            "match": 1
          },
          {
            "type": "rule_ref",
            "name": "_",
            "location": {
              "source": "grammar/peg.pegjs",
              "start": {
                "offset": 201,
                "line": 14,
                "column": 10
              },
              "end": {
                "offset": 202,
                "line": 14,
                "column": 11
              }
            },
            "match": 1
          },
          {
            "type": "rule_ref",
            "name": "label",
            "location": {
              "source": "grammar/peg.pegjs",
              "start": {
                "offset": 203,
                "line": 14,
                "column": 12
              },
              "end": {
                "offset": 208,
                "line": 14,
                "column": 17
              }
            },
            "match": 0
          }
        ],
        "location": {
          "source": "grammar/peg.pegjs",
          "start": {
            "offset": 196,
            "line": 14,
            "column": 5
          },
          "end": {
            "offset": 208,
            "line": 14,
            "column": 17
          }
        },
        "match": 0
      },
      "location": {
        "source": "grammar/peg.pegjs",
        "start": {
          "offset": 186,
          "line": 13,
          "column": 1
        },
        "end": {
          "offset": 209,
          "line": 15,
          "column": 1
        }
      },
      "match": 0,
      "bytecode": [
        5,
        18,
        3,
        2,
        2,
        22,
        3,
        23,
        3,
        14,
        2,
        0,
        6,
        2,
        27,
        14,
        27,
        5,
        15,
        3,
        4,
        11,
        3,
        9,
        8,
        3,
        7,
        3
      ]
    },
    {
      "type": "rule",
      "name": "label",
      "nameLocation": {
        "source": "grammar/peg.pegjs",
        "start": {
          "offset": 210,
          "line": 16,
          "column": 1
        },
        "end": {
          "offset": 215,
          "line": 16,
          "column": 6
        }
      },
      "expression": {
        "type": "sequence",
        "elements": [
          {
            "type": "optional",
            "expression": {
              "type": "group",
              "expression": {
                "type": "sequence",
                "elements": [
                  {
                    "type": "rule_ref",
                    "name": "identifier",
                    "location": {
                      "source": "grammar/peg.pegjs",
                      "start": {
                        "offset": 221,
                        "line": 17,
                        "column": 6
                      },
                      "end": {
                        "offset": 231,
                        "line": 17,
                        "column": 16
                      }
                    },
                    "match": 0
                  },
                  {
                    "type": "rule_ref",
                    "name": "_",
                    "location": {
                      "source": "grammar/peg.pegjs",
                      "start": {
                        "offset": 232,
                        "line": 17,
                        "column": 17
                      },
                      "end": {
                        "offset": 233,
                        "line": 17,
                        "column": 18
                      }
                    },
                    "match": 1
                  },
                  {
                    "type": "literal",
                    "value": ":",
                    "ignoreCase": false,
                    "location": {
                      "source": "grammar/peg.pegjs",
                      "start": {
                        "offset": 234,
                        "line": 17,
                        "column": 19
                      },
                      "end": {
                        "offset": 237,
                        "line": 17,
                        "column": 22
                      }
                    },
                    "match": 0
                  }
                ],
                "location": {
                  "source": "grammar/peg.pegjs",
                  "start": {
                    "offset": 221,
                    "line": 17,
                    "column": 6
                  },
                  "end": {
                    "offset": 237,
                    "line": 17,
                    "column": 22
                  }
                },
                "match": 0
              },
              "location": {
                "source": "grammar/peg.pegjs",
                "start": {
                  "offset": 220,
                  "line": 17,
                  "column": 5
                },
                "end": {
                  "offset": 238,
                  "line": 17,
                  "column": 23
                }
              },
              "match": 0
            },
            "location": {
              "source": "grammar/peg.pegjs",
              "start": {
                "offset": 220,
                "line": 17,
                "column": 5
              },
              "end": {
                "offset": 239,
                "line": 17,
                "column": 24
              }
            },
            "match": 1
          },
          {
            "type": "rule_ref",
            "name": "_",
            "location": {
              "source": "grammar/peg.pegjs",
              "start": {
                "offset": 240,
                "line": 17,
                "column": 25
              },
              "end": {
                "offset": 241,
                "line": 17,
                "column": 26
              }
            },
            "match": 1
          },
          {
            "type": "rule_ref",
            "name": "expression",
            "location": {
              "source": "grammar/peg.pegjs",
              "start": {
                "offset": 242,
                "line": 17,
                "column": 27
              },
              "end": {
                "offset": 252,
                "line": 17,
                "column": 37
              }
            },
            "match": 0
          }
        ],
        "location": {
          "source": "grammar/peg.pegjs",
          "start": {
            "offset": 220,
            "line": 17,
            "column": 5
          },
          "end": {
            "offset": 252,
            "line": 17,
            "column": 37
          }
        },
        "match": 0
      },
      "location": {
        "source": "grammar/peg.pegjs",
        "start": {
          "offset": 210,
          "line": 16,
          "column": 1
        },
        "end": {
          "offset": 253,
          "line": 18,
          "column": 1
        }
      },
      "match": 0,
      "bytecode": [
        5,
        5,
        27,
        13,
        15,
        20,
        3,
        27,
        14,
        18,
        4,
        2,
        2,
        22,
        4,
        23,
        4,
        15,
        3,
        4,
        11,
        3,
        9,
        8,
        3,
        7,
        3,
        6,
        7,
        3,
        14,
        2,
        0,
        6,
        2,
        27,
        14,
        27,
        6,
        15,
        3,
        4,
        11,
        3,
        9,
        8,
        3,
        7,
        3
      ]
    },
    {
      "type": "rule",
      "name": "expression",
      "nameLocation": {
        "source": "grammar/peg.pegjs",
        "start": {
          "offset": 254,
          "line": 19,
          "column": 1
        },
        "end": {
          "offset": 264,
          "line": 19,
          "column": 11
        }
      },
      "expression": {
        "type": "sequence",
        "elements": [
          {
            "type": "optional",
            "expression": {
              "type": "literal",
              "value": "$",
              "ignoreCase": false,
              "location": {
                "source": "grammar/peg.pegjs",
                "start": {
                  "offset": 269,
                  "line": 20,
                  "column": 5
                },
                "end": {
                  "offset": 272,
                  "line": 20,
                  "column": 8
                }
              },
              "match": 0
            },
            "location": {
              "source": "grammar/peg.pegjs",
              "start": {
                "offset": 269,
                "line": 20,
                "column": 5
              },
              "end": {
                "offset": 273,
                "line": 20,
                "column": 9
              }
            },
            "match": 1
          },
          {
            "type": "rule_ref",
            "name": "_",
            "location": {
              "source": "grammar/peg.pegjs",
              "start": {
                "offset": 274,
                "line": 20,
                "column": 10
              },
              "end": {
                "offset": 275,
                "line": 20,
                "column": 11
              }
            },
            "match": 1
          },
          {
            "type": "rule_ref",
            "name": "parsingExpression",
            "location": {
              "source": "grammar/peg.pegjs",
              "start": {
                "offset": 276,
                "line": 20,
                "column": 12
              },
              "end": {
                "offset": 293,
                "line": 20,
                "column": 29
              }
            },
            "match": 0
          },
          {
            "type": "rule_ref",
            "name": "_",
            "location": {
              "source": "grammar/peg.pegjs",
              "start": {
                "offset": 294,
                "line": 20,
                "column": 30
              },
              "end": {
                "offset": 295,
                "line": 20,
                "column": 31
              }
            },
            "match": 1
          },
          {
            "type": "optional",
            "expression": {
              "type": "rule_ref",
              "name": "quantifier",
              "location": {
                "source": "grammar/peg.pegjs",
                "start": {
                  "offset": 296,
                  "line": 20,
                  "column": 32
                },
                "end": {
                  "offset": 306,
                  "line": 20,
                  "column": 42
                }
              },
              "match": 0
            },
            "location": {
              "source": "grammar/peg.pegjs",
              "start": {
                "offset": 296,
                "line": 20,
                "column": 32
              },
              "end": {
                "offset": 307,
                "line": 20,
                "column": 43
              }
            },
            "match": 1
          }
        ],
        "location": {
          "source": "grammar/peg.pegjs",
          "start": {
            "offset": 269,
            "line": 20,
            "column": 5
          },
          "end": {
            "offset": 307,
            "line": 20,
            "column": 43
          }
        },
        "match": 0
      },
      "location": {
        "source": "grammar/peg.pegjs",
        "start": {
          "offset": 254,
          "line": 19,
          "column": 1
        },
        "end": {
          "offset": 308,
          "line": 21,
          "column": 1
        }
      },
      "match": 0,
      "bytecode": [
        5,
        18,
        5,
        2,
        2,
        22,
        5,
        23,
        5,
        14,
        2,
        0,
        6,
        2,
        27,
        14,
        27,
        8,
        15,
        12,
        4,
        27,
        14,
        27,
        7,
        14,
        2,
        0,
        6,
        2,
        11,
        5,
        9,
        8,
        3,
        7,
        3
      ]
    },
    {
      "type": "rule",
      "name": "quantifier",
      "nameLocation": {
        "source": "grammar/peg.pegjs",
        "start": {
          "offset": 309,
          "line": 22,
          "column": 1
        },
        "end": {
          "offset": 319,
          "line": 22,
          "column": 11
        }
      },
      "expression": {
        "type": "choice",
        "alternatives": [
          {
            "type": "class",
            "parts": [
              "?",
              "+",
              "*"
            ],
            "inverted": false,
            "ignoreCase": false,
            "location": {
              "source": "grammar/peg.pegjs",
              "start": {
                "offset": 324,
                "line": 23,
                "column": 5
              },
              "end": {
                "offset": 329,
                "line": 23,
                "column": 10
              }
            },
            "match": 0
          },
          {
            "type": "sequence",
            "elements": [
              {
                "type": "literal",
                "value": "|",
                "ignoreCase": false,
                "location": {
                  "source": "grammar/peg.pegjs",
                  "start": {
                    "offset": 334,
                    "line": 24,
                    "column": 5
                  },
                  "end": {
                    "offset": 337,
                    "line": 24,
                    "column": 8
                  }
                },
                "match": 0
              },
              {
                "type": "rule_ref",
                "name": "_",
                "location": {
                  "source": "grammar/peg.pegjs",
                  "start": {
                    "offset": 338,
                    "line": 24,
                    "column": 9
                  },
                  "end": {
                    "offset": 339,
                    "line": 24,
                    "column": 10
                  }
                },
                "match": 1
              },
              {
                "type": "choice",
                "alternatives": [
                  {
                    "type": "rule_ref",
                    "name": "number",
                    "location": {
                      "source": "grammar/peg.pegjs",
                      "start": {
                        "offset": 341,
                        "line": 24,
                        "column": 12
                      },
                      "end": {
                        "offset": 347,
                        "line": 24,
                        "column": 18
                      }
                    },
                    "match": 0
                  },
                  {
                    "type": "rule_ref",
                    "name": "identifier",
                    "location": {
                      "source": "grammar/peg.pegjs",
                      "start": {
                        "offset": 350,
                        "line": 24,
                        "column": 21
                      },
                      "end": {
                        "offset": 360,
                        "line": 24,
                        "column": 31
                      }
                    },
                    "match": 0
                  }
                ],
                "location": {
                  "source": "grammar/peg.pegjs",
                  "start": {
                    "offset": 341,
                    "line": 24,
                    "column": 12
                  },
                  "end": {
                    "offset": 360,
                    "line": 24,
                    "column": 31
                  }
                },
                "match": 0
              },
              {
                "type": "rule_ref",
                "name": "_",
                "location": {
                  "source": "grammar/peg.pegjs",
                  "start": {
                    "offset": 362,
                    "line": 24,
                    "column": 33
                  },
                  "end": {
                    "offset": 363,
                    "line": 24,
                    "column": 34
                  }
                },
                "match": 1
              },
              {
                "type": "literal",
                "value": "|",
                "ignoreCase": false,
                "location": {
                  "source": "grammar/peg.pegjs",
                  "start": {
                    "offset": 364,
                    "line": 24,
                    "column": 35
                  },
                  "end": {
                    "offset": 367,
                    "line": 24,
                    "column": 38
                  }
                },
                "match": 0
              }
            ],
            "location": {
              "source": "grammar/peg.pegjs",
              "start": {
                "offset": 334,
                "line": 24,
                "column": 5
              },
              "end": {
                "offset": 367,
                "line": 24,
                "column": 38
              }
            },
            "match": 0
          },
          {
            "type": "sequence",
            "elements": [
              {
                "type": "literal",
                "value": "|",
                "ignoreCase": false,
                "location": {
                  "source": "grammar/peg.pegjs",
                  "start": {
                    "offset": 372,
                    "line": 25,
                    "column": 5
                  },
                  "end": {
                    "offset": 375,
                    "line": 25,
                    "column": 8
                  }
                },
                "match": 0
              },
              {
                "type": "rule_ref",
                "name": "_",
                "location": {
                  "source": "grammar/peg.pegjs",
                  "start": {
                    "offset": 376,
                    "line": 25,
                    "column": 9
                  },
                  "end": {
                    "offset": 377,
                    "line": 25,
                    "column": 10
                  }
                },
                "match": 1
              },
              {
                "type": "optional",
                "expression": {
                  "type": "choice",
                  "alternatives": [
                    {
                      "type": "rule_ref",
                      "name": "number",
                      "location": {
                        "source": "grammar/peg.pegjs",
                        "start": {
                          "offset": 379,
                          "line": 25,
                          "column": 12
                        },
                        "end": {
                          "offset": 385,
                          "line": 25,
                          "column": 18
                        }
                      },
                      "match": 0
                    },
                    {
                      "type": "rule_ref",
                      "name": "identifier",
                      "location": {
                        "source": "grammar/peg.pegjs",
                        "start": {
                          "offset": 388,
                          "line": 25,
                          "column": 21
                        },
                        "end": {
                          "offset": 398,
                          "line": 25,
                          "column": 31
                        }
                      },
                      "match": 0
                    }
                  ],
                  "location": {
                    "source": "grammar/peg.pegjs",
                    "start": {
                      "offset": 379,
                      "line": 25,
                      "column": 12
                    },
                    "end": {
                      "offset": 398,
                      "line": 25,
                      "column": 31
                    }
                  },
                  "match": 0
                },
                "location": {
                  "source": "grammar/peg.pegjs",
                  "start": {
                    "offset": 378,
                    "line": 25,
                    "column": 11
                  },
                  "end": {
                    "offset": 400,
                    "line": 25,
                    "column": 33
                  }
                },
                "match": 1
              },
              {
                "type": "rule_ref",
                "name": "_",
                "location": {
                  "source": "grammar/peg.pegjs",
                  "start": {
                    "offset": 401,
                    "line": 25,
                    "column": 34
                  },
                  "end": {
                    "offset": 402,
                    "line": 25,
                    "column": 35
                  }
                },
                "match": 1
              },
              {
                "type": "literal",
                "value": "..",
                "ignoreCase": false,
                "location": {
                  "source": "grammar/peg.pegjs",
                  "start": {
                    "offset": 403,
                    "line": 25,
                    "column": 36
                  },
                  "end": {
                    "offset": 407,
                    "line": 25,
                    "column": 40
                  }
                },
                "match": 0
              },
              {
                "type": "rule_ref",
                "name": "_",
                "location": {
                  "source": "grammar/peg.pegjs",
                  "start": {
                    "offset": 408,
                    "line": 25,
                    "column": 41
                  },
                  "end": {
                    "offset": 409,
                    "line": 25,
                    "column": 42
                  }
                },
                "match": 1
              },
              {
                "type": "optional",
                "expression": {
                  "type": "choice",
                  "alternatives": [
                    {
                      "type": "rule_ref",
                      "name": "number",
                      "location": {
                        "source": "grammar/peg.pegjs",
                        "start": {
                          "offset": 411,
                          "line": 25,
                          "column": 44
                        },
                        "end": {
                          "offset": 417,
                          "line": 25,
                          "column": 50
                        }
                      },
                      "match": 0
                    },
                    {
                      "type": "rule_ref",
                      "name": "identifier",
                      "location": {
                        "source": "grammar/peg.pegjs",
                        "start": {
                          "offset": 420,
                          "line": 25,
                          "column": 53
                        },
                        "end": {
                          "offset": 430,
                          "line": 25,
                          "column": 63
                        }
                      },
                      "match": 0
                    }
                  ],
                  "location": {
                    "source": "grammar/peg.pegjs",
                    "start": {
                      "offset": 411,
                      "line": 25,
                      "column": 44
                    },
                    "end": {
                      "offset": 430,
                      "line": 25,
                      "column": 63
                    }
                  },
                  "match": 0
                },
                "location": {
                  "source": "grammar/peg.pegjs",
                  "start": {
                    "offset": 410,
                    "line": 25,
                    "column": 43
                  },
                  "end": {
                    "offset": 432,
                    "line": 25,
                    "column": 65
                  }
                },
                "match": 1
              },
              {
                "type": "rule_ref",
                "name": "_",
                "location": {
                  "source": "grammar/peg.pegjs",
                  "start": {
                    "offset": 433,
                    "line": 25,
                    "column": 66
                  },
                  "end": {
                    "offset": 434,
                    "line": 25,
                    "column": 67
                  }
                },
                "match": 1
              },
              {
                "type": "literal",
                "value": "|",
                "ignoreCase": false,
                "location": {
                  "source": "grammar/peg.pegjs",
                  "start": {
                    "offset": 435,
                    "line": 25,
                    "column": 68
                  },
                  "end": {
                    "offset": 438,
                    "line": 25,
                    "column": 71
                  }
                },
                "match": 0
              }
            ],
            "location": {
              "source": "grammar/peg.pegjs",
              "start": {
                "offset": 372,
                "line": 25,
                "column": 5
              },
              "end": {
                "offset": 438,
                "line": 25,
                "column": 71
              }
            },
            "match": 0
          },
          {
            "type": "sequence",
            "elements": [
              {
                "type": "literal",
                "value": "|",
                "ignoreCase": false,
                "location": {
                  "source": "grammar/peg.pegjs",
                  "start": {
                    "offset": 443,
                    "line": 26,
                    "column": 5
                  },
                  "end": {
                    "offset": 446,
                    "line": 26,
                    "column": 8
                  }
                },
                "match": 0
              },
              {
                "type": "rule_ref",
                "name": "_",
                "location": {
                  "source": "grammar/peg.pegjs",
                  "start": {
                    "offset": 447,
                    "line": 26,
                    "column": 9
                  },
                  "end": {
                    "offset": 448,
                    "line": 26,
                    "column": 10
                  }
                },
                "match": 1
              },
              {
                "type": "optional",
                "expression": {
                  "type": "choice",
                  "alternatives": [
                    {
                      "type": "rule_ref",
                      "name": "number",
                      "location": {
                        "source": "grammar/peg.pegjs",
                        "start": {
                          "offset": 450,
                          "line": 26,
                          "column": 12
                        },
                        "end": {
                          "offset": 456,
                          "line": 26,
                          "column": 18
                        }
                      },
                      "match": 0
                    },
                    {
                      "type": "rule_ref",
                      "name": "identifier",
                      "location": {
                        "source": "grammar/peg.pegjs",
                        "start": {
                          "offset": 459,
                          "line": 26,
                          "column": 21
                        },
                        "end": {
                          "offset": 469,
                          "line": 26,
                          "column": 31
                        }
                      },
                      "match": 0
                    }
                  ],
                  "location": {
                    "source": "grammar/peg.pegjs",
                    "start": {
                      "offset": 450,
                      "line": 26,
                      "column": 12
                    },
                    "end": {
                      "offset": 469,
                      "line": 26,
                      "column": 31
                    }
                  },
                  "match": 0
                },
                "location": {
                  "source": "grammar/peg.pegjs",
                  "start": {
                    "offset": 449,
                    "line": 26,
                    "column": 11
                  },
                  "end": {
                    "offset": 471,
                    "line": 26,
                    "column": 33
                  }
                },
                "match": 1
              },
              {
                "type": "rule_ref",
                "name": "_",
                "location": {
                  "source": "grammar/peg.pegjs",
                  "start": {
                    "offset": 472,
                    "line": 26,
                    "column": 34
                  },
                  "end": {
                    "offset": 473,
                    "line": 26,
                    "column": 35
                  }
                },
                "match": 1
              },
              {
                "type": "literal",
                "value": ",",
                "ignoreCase": false,
                "location": {
                  "source": "grammar/peg.pegjs",
                  "start": {
                    "offset": 474,
                    "line": 26,
                    "column": 36
                  },
                  "end": {
                    "offset": 477,
                    "line": 26,
                    "column": 39
                  }
                },
                "match": 0
              },
              {
                "type": "rule_ref",
                "name": "_",
                "location": {
                  "source": "grammar/peg.pegjs",
                  "start": {
                    "offset": 478,
                    "line": 26,
                    "column": 40
                  },
                  "end": {
                    "offset": 479,
                    "line": 26,
                    "column": 41
                  }
                },
                "match": 1
              },
              {
                "type": "rule_ref",
                "name": "choice",
                "location": {
                  "source": "grammar/peg.pegjs",
                  "start": {
                    "offset": 480,
                    "line": 26,
                    "column": 42
                  },
                  "end": {
                    "offset": 486,
                    "line": 26,
                    "column": 48
                  }
                },
                "match": 0
              },
              {
                "type": "rule_ref",
                "name": "_",
                "location": {
                  "source": "grammar/peg.pegjs",
                  "start": {
                    "offset": 487,
                    "line": 26,
                    "column": 49
                  },
                  "end": {
                    "offset": 488,
                    "line": 26,
                    "column": 50
                  }
                },
                "match": 1
              },
              {
                "type": "literal",
                "value": "|",
                "ignoreCase": false,
                "location": {
                  "source": "grammar/peg.pegjs",
                  "start": {
                    "offset": 489,
                    "line": 26,
                    "column": 51
                  },
                  "end": {
                    "offset": 492,
                    "line": 26,
                    "column": 54
                  }
                },
                "match": 0
              }
            ],
            "location": {
              "source": "grammar/peg.pegjs",
              "start": {
                "offset": 443,
                "line": 26,
                "column": 5
              },
              "end": {
                "offset": 492,
                "line": 26,
                "column": 54
              }
            },
            "match": 0
          },
          {
            "type": "sequence",
            "elements": [
              {
                "type": "literal",
                "value": "|",
                "ignoreCase": false,
                "location": {
                  "source": "grammar/peg.pegjs",
                  "start": {
                    "offset": 497,
                    "line": 27,
                    "column": 5
                  },
                  "end": {
                    "offset": 500,
                    "line": 27,
                    "column": 8
                  }
                },
                "match": 0
              },
              {
                "type": "rule_ref",
                "name": "_",
                "location": {
                  "source": "grammar/peg.pegjs",
                  "start": {
                    "offset": 501,
                    "line": 27,
                    "column": 9
                  },
                  "end": {
                    "offset": 502,
                    "line": 27,
                    "column": 10
                  }
                },
                "match": 1
              },
              {
                "type": "optional",
                "expression": {
                  "type": "choice",
                  "alternatives": [
                    {
                      "type": "rule_ref",
                      "name": "number",
                      "location": {
                        "source": "grammar/peg.pegjs",
                        "start": {
                          "offset": 504,
                          "line": 27,
                          "column": 12
                        },
                        "end": {
                          "offset": 510,
                          "line": 27,
                          "column": 18
                        }
                      },
                      "match": 0
                    },
                    {
                      "type": "rule_ref",
                      "name": "identifier",
                      "location": {
                        "source": "grammar/peg.pegjs",
                        "start": {
                          "offset": 513,
                          "line": 27,
                          "column": 21
                        },
                        "end": {
                          "offset": 523,
                          "line": 27,
                          "column": 31
                        }
                      },
                      "match": 0
                    }
                  ],
                  "location": {
                    "source": "grammar/peg.pegjs",
                    "start": {
                      "offset": 504,
                      "line": 27,
                      "column": 12
                    },
                    "end": {
                      "offset": 523,
                      "line": 27,
                      "column": 31
                    }
                  },
                  "match": 0
                },
                "location": {
                  "source": "grammar/peg.pegjs",
                  "start": {
                    "offset": 503,
                    "line": 27,
                    "column": 11
                  },
                  "end": {
                    "offset": 525,
                    "line": 27,
                    "column": 33
                  }
                },
                "match": 1
              },
              {
                "type": "rule_ref",
                "name": "_",
                "location": {
                  "source": "grammar/peg.pegjs",
                  "start": {
                    "offset": 526,
                    "line": 27,
                    "column": 34
                  },
                  "end": {
                    "offset": 527,
                    "line": 27,
                    "column": 35
                  }
                },
                "match": 1
              },
              {
                "type": "literal",
                "value": "..",
                "ignoreCase": false,
                "location": {
                  "source": "grammar/peg.pegjs",
                  "start": {
                    "offset": 528,
                    "line": 27,
                    "column": 36
                  },
                  "end": {
                    "offset": 532,
                    "line": 27,
                    "column": 40
                  }
                },
                "match": 0
              },
              {
                "type": "rule_ref",
                "name": "_",
                "location": {
                  "source": "grammar/peg.pegjs",
                  "start": {
                    "offset": 533,
                    "line": 27,
                    "column": 41
                  },
                  "end": {
                    "offset": 534,
                    "line": 27,
                    "column": 42
                  }
                },
                "match": 1
              },
              {
                "type": "optional",
                "expression": {
                  "type": "choice",
                  "alternatives": [
                    {
                      "type": "rule_ref",
                      "name": "number",
                      "location": {
                        "source": "grammar/peg.pegjs",
                        "start": {
                          "offset": 536,
                          "line": 27,
                          "column": 44
                        },
                        "end": {
                          "offset": 542,
                          "line": 27,
                          "column": 50
                        }
                      },
                      "match": 0
                    },
                    {
                      "type": "rule_ref",
                      "name": "identifier",
                      "location": {
                        "source": "grammar/peg.pegjs",
                        "start": {
                          "offset": 545,
                          "line": 27,
                          "column": 53
                        },
                        "end": {
                          "offset": 555,
                          "line": 27,
                          "column": 63
                        }
                      },
                      "match": 0
                    }
                  ],
                  "location": {
                    "source": "grammar/peg.pegjs",
                    "start": {
                      "offset": 536,
                      "line": 27,
                      "column": 44
                    },
                    "end": {
                      "offset": 555,
                      "line": 27,
                      "column": 63
                    }
                  },
                  "match": 0
                },
                "location": {
                  "source": "grammar/peg.pegjs",
                  "start": {
                    "offset": 535,
                    "line": 27,
                    "column": 43
                  },
                  "end": {
                    "offset": 557,
                    "line": 27,
                    "column": 65
                  }
                },
                "match": 1
              },
              {
                "type": "rule_ref",
                "name": "_",
                "location": {
                  "source": "grammar/peg.pegjs",
                  "start": {
                    "offset": 558,
                    "line": 27,
                    "column": 66
                  },
                  "end": {
                    "offset": 559,
                    "line": 27,
                    "column": 67
                  }
                },
                "match": 1
              },
              {
                "type": "literal",
                "value": ",",
                "ignoreCase": false,
                "location": {
                  "source": "grammar/peg.pegjs",
                  "start": {
                    "offset": 560,
                    "line": 27,
                    "column": 68
                  },
                  "end": {
                    "offset": 563,
                    "line": 27,
                    "column": 71
                  }
                },
                "match": 0
              },
              {
                "type": "rule_ref",
                "name": "_",
                "location": {
                  "source": "grammar/peg.pegjs",
                  "start": {
                    "offset": 564,
                    "line": 27,
                    "column": 72
                  },
                  "end": {
                    "offset": 565,
                    "line": 27,
                    "column": 73
                  }
                },
                "match": 1
              },
              {
                "type": "rule_ref",
                "name": "choice",
                "location": {
                  "source": "grammar/peg.pegjs",
                  "start": {
                    "offset": 566,
                    "line": 27,
                    "column": 74
                  },
                  "end": {
                    "offset": 572,
                    "line": 27,
                    "column": 80
                  }
                },
                "match": 0
              },
              {
                "type": "rule_ref",
                "name": "_",
                "location": {
                  "source": "grammar/peg.pegjs",
                  "start": {
                    "offset": 573,
                    "line": 27,
                    "column": 81
                  },
                  "end": {
                    "offset": 574,
                    "line": 27,
                    "column": 82
                  }
                },
                "match": 1
              },
              {
                "type": "literal",
                "value": "|",
                "ignoreCase": false,
                "location": {
                  "source": "grammar/peg.pegjs",
                  "start": {
                    "offset": 575,
                    "line": 27,
                    "column": 83
                  },
                  "end": {
                    "offset": 578,
                    "line": 27,
                    "column": 86
                  }
                },
                "match": 0
              }
            ],
            "location": {
              "source": "grammar/peg.pegjs",
              "start": {
                "offset": 497,
                "line": 27,
                "column": 5
              },
              "end": {
                "offset": 578,
                "line": 27,
                "column": 86
              }
            },
            "match": 0
          }
        ],
        "location": {
          "source": "grammar/peg.pegjs",
          "start": {
            "offset": 324,
            "line": 23,
            "column": 5
          },
          "end": {
            "offset": 578,
            "line": 27,
            "column": 86
          }
        },
        "match": 0
      },
      "location": {
        "source": "grammar/peg.pegjs",
        "start": {
          "offset": 309,
          "line": 22,
          "column": 1
        },
        "end": {
          "offset": 579,
          "line": 28,
          "column": 1
        }
      },
      "match": 0,
      "bytecode": [
        20,
        0,
        2,
        2,
        21,
        1,
        23,
        6,
        14,
        335,
        0,
        6,
        5,
        18,
        6,
        2,
        2,
        22,
        6,
        23,
        7,
        15,
        37,
        3,
        27,
        14,
        27,
        15,
        14,
        3,
        0,
        6,
        27,
        13,
        15,
        20,
        4,
        27,
        14,
        18,
        6,
        2,
        2,
        22,
        6,
        23,
        7,
        15,
        3,
        4,
        11,
        5,
        9,
        8,
        5,
        7,
        3,
        8,
        3,
        7,
        3,
        6,
        7,
        3,
        14,
        279,
        0,
        6,
        5,
        18,
        6,
        2,
        2,
        22,
        6,
        23,
        7,
        15,
        67,
        3,
        27,
        14,
        27,
        15,
        14,
        3,
        0,
        6,
        27,
        13,
        14,
        2,
        0,
        6,
        2,
        27,
        14,
        18,
        7,
        2,
        2,
        22,
        7,
        23,
        8,
        15,
        35,
        4,
        27,
        14,
        27,
        15,
        14,
        3,
        0,
        6,
        27,
        13,
        14,
        2,
        0,
        6,
        2,
        27,
        14,
        18,
        6,
        2,
        2,
        22,
        6,
        23,
        7,
        15,
        3,
        4,
        11,
        9,
        9,
        8,
        9,
        7,
        3,
        8,
        5,
        7,
        3,
        6,
        7,
        3,
        14,
        193,
        0,
        6,
        5,
        18,
        6,
        2,
        2,
        22,
        6,
        23,
        7,
        15,
        63,
        3,
        27,
        14,
        27,
        15,
        14,
        3,
        0,
        6,
        27,
        13,
        14,
        2,
        0,
        6,
        2,
        27,
        14,
        18,
        8,
        2,
        2,
        22,
        8,
        23,
        9,
        15,
        31,
        4,
        27,
        14,
        27,
        2,
        15,
        20,
        4,
        27,
        14,
        18,
        6,
        2,
        2,
        22,
        6,
        23,
        7,
        15,
        3,
        4,
        11,
        9,
        9,
        8,
        9,
        7,
        3,
        8,
        7,
        7,
        3,
        8,
        5,
        7,
        3,
        6,
        7,
        3,
        14,
        111,
        0,
        6,
        5,
        18,
        6,
        2,
        2,
        22,
        6,
        23,
        7,
        15,
        95,
        3,
        27,
        14,
        27,
        15,
        14,
        3,
        0,
        6,
        27,
        13,
        14,
        2,
        0,
        6,
        2,
        27,
        14,
        18,
        7,
        2,
        2,
        22,
        7,
        23,
        8,
        15,
        63,
        4,
        27,
        14,
        27,
        15,
        14,
        3,
        0,
        6,
        27,
        13,
        14,
        2,
        0,
        6,
        2,
        27,
        14,
        18,
        8,
        2,
        2,
        22,
        8,
        23,
        9,
        15,
        31,
        4,
        27,
        14,
        27,
        2,
        15,
        20,
        4,
        27,
        14,
        18,
        6,
        2,
        2,
        22,
        6,
        23,
        7,
        15,
        3,
        4,
        11,
        13,
        9,
        8,
        13,
        7,
        3,
        8,
        11,
        7,
        3,
        8,
        9,
        7,
        3,
        8,
        5,
        7,
        3,
        6,
        7,
        3
      ]
    },
    {
      "type": "rule",
      "name": "parsingExpression",
      "nameLocation": {
        "source": "grammar/peg.pegjs",
        "start": {
          "offset": 580,
          "line": 29,
          "column": 1
        },
        "end": {
          "offset": 597,
          "line": 29,
          "column": 18
        }
      },
      "expression": {
        "type": "choice",
        "alternatives": [
          {
            "type": "rule_ref",
            "name": "identifier",
            "location": {
              "source": "grammar/peg.pegjs",
              "start": {
                "offset": 602,
                "line": 30,
                "column": 5
              },
              "end": {
                "offset": 612,
                "line": 30,
                "column": 15
              }
            },
            "match": 0
          },
          {
            "type": "sequence",
            "elements": [
              {
                "type": "rule_ref",
                "name": "string",
                "location": {
                  "source": "grammar/peg.pegjs",
                  "start": {
                    "offset": 617,
                    "line": 31,
                    "column": 5
                  },
                  "end": {
                    "offset": 623,
                    "line": 31,
                    "column": 11
                  }
                },
                "match": 0
              },
              {
                "type": "optional",
                "expression": {
                  "type": "literal",
                  "value": "i",
                  "ignoreCase": false,
                  "location": {
                    "source": "grammar/peg.pegjs",
                    "start": {
                      "offset": 624,
                      "line": 31,
                      "column": 12
                    },
                    "end": {
                      "offset": 627,
                      "line": 31,
                      "column": 15
                    }
                  },
                  "match": 0
                },
                "location": {
                  "source": "grammar/peg.pegjs",
                  "start": {
                    "offset": 624,
                    "line": 31,
                    "column": 12
                  },
                  "end": {
                    "offset": 628,
                    "line": 31,
                    "column": 16
                  }
                },
                "match": 1
              }
            ],
            "location": {
              "source": "grammar/peg.pegjs",
              "start": {
                "offset": 617,
                "line": 31,
                "column": 5
              },
              "end": {
                "offset": 628,
                "line": 31,
                "column": 16
              }
            },
            "match": 0
          },
          {
            "type": "sequence",
            "elements": [
              {
                "type": "rule_ref",
                "name": "range",
                "location": {
                  "source": "grammar/peg.pegjs",
                  "start": {
                    "offset": 633,
                    "line": 32,
                    "column": 5
                  },
                  "end": {
                    "offset": 638,
                    "line": 32,
                    "column": 10
                  }
                },
                "match": 0
              },
              {
                "type": "optional",
                "expression": {
                  "type": "literal",
                  "value": "i",
                  "ignoreCase": false,
                  "location": {
                    "source": "grammar/peg.pegjs",
                    "start": {
                      "offset": 639,
                      "line": 32,
                      "column": 11
                    },
                    "end": {
                      "offset": 642,
                      "line": 32,
                      "column": 14
                    }
                  },
                  "match": 0
                },
                "location": {
                  "source": "grammar/peg.pegjs",
                  "start": {
                    "offset": 639,
                    "line": 32,
                    "column": 11
                  },
                  "end": {
                    "offset": 643,
                    "line": 32,
                    "column": 15
                  }
                },
                "match": 1
              }
            ],
            "location": {
              "source": "grammar/peg.pegjs",
              "start": {
                "offset": 633,
                "line": 32,
                "column": 5
              },
              "end": {
                "offset": 643,
                "line": 32,
                "column": 15
              }
            },
            "match": 0
          },
          {
            "type": "rule_ref",
            "name": "group",
            "location": {
              "source": "grammar/peg.pegjs",
              "start": {
                "offset": 648,
                "line": 33,
                "column": 5
              },
              "end": {
                "offset": 653,
                "line": 33,
                "column": 10
              }
            },
            "match": 0
          }
        ],
        "location": {
          "source": "grammar/peg.pegjs",
          "start": {
            "offset": 602,
            "line": 30,
            "column": 5
          },
          "end": {
            "offset": 653,
            "line": 33,
            "column": 10
          }
        },
        "match": 0
      },
      "location": {
        "source": "grammar/peg.pegjs",
        "start": {
          "offset": 580,
          "line": 29,
          "column": 1
        },
        "end": {
          "offset": 654,
          "line": 34,
          "column": 1
        }
      },
      "match": 0,
      "bytecode": [
        27,
        13,
        14,
        61,
        0,
        6,
        5,
        27,
        10,
        15,
        16,
        3,
        18,
        9,
        2,
        2,
        22,
        9,
        23,
        10,
        14,
        2,
        0,
        6,
        2,
        11,
        2,
        9,
        6,
        7,
        3,
        14,
        32,
        0,
        6,
        5,
        27,
        11,
        15,
        16,
        3,
        18,
        9,
        2,
        2,
        22,
        9,
        23,
        10,
        14,
        2,
        0,
        6,
        2,
        11,
        2,
        9,
        6,
        7,
        3,
        14,
        3,
        0,
        6,
        27,
        9
      ]
    },
    {
      "type": "rule",
      "name": "group",
      "nameLocation": {
        "source": "grammar/peg.pegjs",
        "start": {
          "offset": 655,
          "line": 35,
          "column": 1
        },
        "end": {
          "offset": 660,
          "line": 35,
          "column": 6
        }
      },
      "expression": {
        "type": "sequence",
        "elements": [
          {
            "type": "literal",
            "value": "(",
            "ignoreCase": false,
            "location": {
              "source": "grammar/peg.pegjs",
              "start": {
                "offset": 665,
                "line": 36,
                "column": 5
              },
              "end": {
                "offset": 668,
                "line": 36,
                "column": 8
              }
            },
            "match": 0
          },
          {
            "type": "rule_ref",
            "name": "_",
            "location": {
              "source": "grammar/peg.pegjs",
              "start": {
                "offset": 669,
                "line": 36,
                "column": 9
              },
              "end": {
                "offset": 670,
                "line": 36,
                "column": 10
              }
            },
            "match": 1
          },
          {
            "type": "rule_ref",
            "name": "choice",
            "location": {
              "source": "grammar/peg.pegjs",
              "start": {
                "offset": 671,
                "line": 36,
                "column": 11
              },
              "end": {
                "offset": 677,
                "line": 36,
                "column": 17
              }
            },
            "match": 0
          },
          {
            "type": "rule_ref",
            "name": "_",
            "location": {
              "source": "grammar/peg.pegjs",
              "start": {
                "offset": 678,
                "line": 36,
                "column": 18
              },
              "end": {
                "offset": 679,
                "line": 36,
                "column": 19
              }
            },
            "match": 1
          },
          {
            "type": "literal",
            "value": ")",
            "ignoreCase": false,
            "location": {
              "source": "grammar/peg.pegjs",
              "start": {
                "offset": 680,
                "line": 36,
                "column": 20
              },
              "end": {
                "offset": 683,
                "line": 36,
                "column": 23
              }
            },
            "match": 0
          }
        ],
        "location": {
          "source": "grammar/peg.pegjs",
          "start": {
            "offset": 665,
            "line": 36,
            "column": 5
          },
          "end": {
            "offset": 683,
            "line": 36,
            "column": 23
          }
        },
        "match": 0
      },
      "location": {
        "source": "grammar/peg.pegjs",
        "start": {
          "offset": 655,
          "line": 35,
          "column": 1
        },
        "end": {
          "offset": 684,
          "line": 37,
          "column": 1
        }
      },
      "match": 0,
      "bytecode": [
        5,
        18,
        10,
        2,
        2,
        22,
        10,
        23,
        11,
        15,
        31,
        3,
        27,
        14,
        27,
        2,
        15,
        20,
        4,
        27,
        14,
        18,
        11,
        2,
        2,
        22,
        11,
        23,
        12,
        15,
        3,
        4,
        11,
        5,
        9,
        8,
        5,
        7,
        3,
        8,
        3,
        7,
        3,
        6,
        7,
        3
      ]
    },
    {
      "type": "rule",
      "name": "string",
      "nameLocation": {
        "source": "grammar/peg.pegjs",
        "start": {
          "offset": 685,
          "line": 38,
          "column": 1
        },
        "end": {
          "offset": 691,
          "line": 38,
          "column": 7
        }
      },
      "expression": {
        "type": "choice",
        "alternatives": [
          {
            "type": "sequence",
            "elements": [
              {
                "type": "class",
                "parts": [
                  "\""
                ],
                "inverted": false,
                "ignoreCase": false,
                "location": {
                  "source": "grammar/peg.pegjs",
                  "start": {
                    "offset": 695,
                    "line": 39,
                    "column": 4
                  },
                  "end": {
                    "offset": 698,
                    "line": 39,
                    "column": 7
                  }
                },
                "match": 0
              },
              {
                "type": "zero_or_more",
                "expression": {
                  "type": "class",
                  "parts": [
                    "\""
                  ],
                  "inverted": true,
                  "ignoreCase": false,
                  "location": {
                    "source": "grammar/peg.pegjs",
                    "start": {
                      "offset": 699,
                      "line": 39,
                      "column": 8
                    },
                    "end": {
                      "offset": 703,
                      "line": 39,
                      "column": 12
                    }
                  },
                  "match": 0
                },
                "location": {
                  "source": "grammar/peg.pegjs",
                  "start": {
                    "offset": 699,
                    "line": 39,
                    "column": 8
                  },
                  "end": {
                    "offset": 704,
                    "line": 39,
                    "column": 13
                  }
                },
                "match": 1
              },
              {
                "type": "class",
                "parts": [
                  "\""
                ],
                "inverted": false,
                "ignoreCase": false,
                "location": {
                  "source": "grammar/peg.pegjs",
                  "start": {
                    "offset": 705,
                    "line": 39,
                    "column": 14
                  },
                  "end": {
                    "offset": 708,
                    "line": 39,
                    "column": 17
                  }
                },
                "match": 0
              }
            ],
            "location": {
              "source": "grammar/peg.pegjs",
              "start": {
                "offset": 695,
                "line": 39,
                "column": 4
              },
              "end": {
                "offset": 708,
                "line": 39,
                "column": 17
              }
            },
            "match": 0
          },
          {
            "type": "sequence",
            "elements": [
              {
                "type": "class",
                "parts": [
                  "'"
                ],
                "inverted": false,
                "ignoreCase": false,
                "location": {
                  "source": "grammar/peg.pegjs",
                  "start": {
                    "offset": 715,
                    "line": 40,
                    "column": 7
                  },
                  "end": {
                    "offset": 718,
                    "line": 40,
                    "column": 10
                  }
                },
                "match": 0
              },
              {
                "type": "zero_or_more",
                "expression": {
                  "type": "class",
                  "parts": [
                    "'"
                  ],
                  "inverted": true,
                  "ignoreCase": false,
                  "location": {
                    "source": "grammar/peg.pegjs",
                    "start": {
                      "offset": 719,
                      "line": 40,
                      "column": 11
                    },
                    "end": {
                      "offset": 723,
                      "line": 40,
                      "column": 15
                    }
                  },
                  "match": 0
                },
                "location": {
                  "source": "grammar/peg.pegjs",
                  "start": {
                    "offset": 719,
                    "line": 40,
                    "column": 11
                  },
                  "end": {
                    "offset": 724,
                    "line": 40,
                    "column": 16
                  }
                },
                "match": 1
              },
              {
                "type": "class",
                "parts": [
                  "'"
                ],
                "inverted": false,
                "ignoreCase": false,
                "location": {
                  "source": "grammar/peg.pegjs",
                  "start": {
                    "offset": 725,
                    "line": 40,
                    "column": 17
                  },
                  "end": {
                    "offset": 728,
                    "line": 40,
                    "column": 20
                  }
                },
                "match": 0
              }
            ],
            "location": {
              "source": "grammar/peg.pegjs",
              "start": {
                "offset": 715,
                "line": 40,
                "column": 7
              },
              "end": {
                "offset": 728,
                "line": 40,
                "column": 20
              }
            },
            "match": 0
          }
        ],
        "location": {
          "source": "grammar/peg.pegjs",
          "start": {
            "offset": 695,
            "line": 39,
            "column": 4
          },
          "end": {
            "offset": 728,
            "line": 40,
            "column": 20
          }
        },
        "match": 0
      },
      "location": {
        "source": "grammar/peg.pegjs",
        "start": {
          "offset": 685,
          "line": 38,
          "column": 1
        },
        "end": {
          "offset": 729,
          "line": 41,
          "column": 1
        }
      },
      "match": 0,
      "bytecode": [
        5,
        20,
        1,
        2,
        2,
        21,
        1,
        23,
        13,
        15,
        39,
        3,
        4,
        20,
        2,
        2,
        2,
        21,
        1,
        23,
        14,
        16,
        9,
        10,
        20,
        2,
        2,
        2,
        21,
        1,
        23,
        14,
        6,
        20,
        1,
        2,
        2,
        21,
        1,
        23,
        13,
        15,
        3,
        4,
        11,
        3,
        9,
        8,
        3,
        7,
        3,
        6,
        7,
        3,
        14,
        55,
        0,
        6,
        5,
        20,
        3,
        2,
        2,
        21,
        1,
        23,
        15,
        15,
        39,
        3,
        4,
        20,
        4,
        2,
        2,
        21,
        1,
        23,
        16,
        16,
        9,
        10,
        20,
        4,
        2,
        2,
        21,
        1,
        23,
        16,
        6,
        20,
        3,
        2,
        2,
        21,
        1,
        23,
        15,
        15,
        3,
        4,
        11,
        3,
        9,
        8,
        3,
        7,
        3,
        6,
        7,
        3
      ]
    },
    {
      "type": "rule",
      "name": "range",
      "nameLocation": {
        "source": "grammar/peg.pegjs",
        "start": {
          "offset": 734,
          "line": 42,
          "column": 1
        },
        "end": {
          "offset": 739,
          "line": 42,
          "column": 6
        }
      },
      "expression": {
        "type": "sequence",
        "elements": [
          {
            "type": "literal",
            "value": "[",
            "ignoreCase": false,
            "location": {
              "source": "grammar/peg.pegjs",
              "start": {
                "offset": 742,
                "line": 42,
                "column": 9
              },
              "end": {
                "offset": 745,
                "line": 42,
                "column": 12
              }
            },
            "match": 0
          },
          {
            "type": "one_or_more",
            "expression": {
              "type": "rule_ref",
              "name": "input_range",
              "location": {
                "source": "grammar/peg.pegjs",
                "start": {
                  "offset": 746,
                  "line": 42,
                  "column": 13
                },
                "end": {
                  "offset": 757,
                  "line": 42,
                  "column": 24
                }
              },
              "match": 0
            },
            "location": {
              "source": "grammar/peg.pegjs",
              "start": {
                "offset": 746,
                "line": 42,
                "column": 13
              },
              "end": {
                "offset": 758,
                "line": 42,
                "column": 25
              }
            },
            "match": 0
          },
          {
            "type": "literal",
            "value": "]",
            "ignoreCase": false,
            "location": {
              "source": "grammar/peg.pegjs",
              "start": {
                "offset": 759,
                "line": 42,
                "column": 26
              },
              "end": {
                "offset": 762,
                "line": 42,
                "column": 29
              }
            },
            "match": 0
          }
        ],
        "location": {
          "source": "grammar/peg.pegjs",
          "start": {
            "offset": 742,
            "line": 42,
            "column": 9
          },
          "end": {
            "offset": 762,
            "line": 42,
            "column": 29
          }
        },
        "match": 0
      },
      "location": {
        "source": "grammar/peg.pegjs",
        "start": {
          "offset": 734,
          "line": 42,
          "column": 1
        },
        "end": {
          "offset": 763,
          "line": 43,
          "column": 1
        }
      },
      "match": 0,
      "bytecode": [
        5,
        18,
        12,
        2,
        2,
        22,
        12,
        23,
        17,
        15,
        40,
        3,
        4,
        27,
        12,
        15,
        6,
        3,
        16,
        3,
        10,
        27,
        12,
        6,
        6,
        6,
        3,
        15,
        18,
        4,
        18,
        13,
        2,
        2,
        22,
        13,
        23,
        18,
        15,
        3,
        4,
        11,
        3,
        9,
        8,
        3,
        7,
        3,
        8,
        2,
        7,
        3,
        6,
        7,
        3
      ]
    },
    {
      "type": "rule",
      "name": "input_range",
      "nameLocation": {
        "source": "grammar/peg.pegjs",
        "start": {
          "offset": 764,
          "line": 44,
          "column": 1
        },
        "end": {
          "offset": 775,
          "line": 44,
          "column": 12
        }
      },
      "expression": {
        "type": "choice",
        "alternatives": [
          {
            "type": "sequence",
            "elements": [
              {
                "type": "class",
                "parts": [
                  "[",
                  "]",
                  "-"
                ],
                "inverted": true,
                "ignoreCase": false,
                "location": {
                  "source": "grammar/peg.pegjs",
                  "start": {
                    "offset": 778,
                    "line": 44,
                    "column": 15
                  },
                  "end": {
                    "offset": 785,
                    "line": 44,
                    "column": 22
                  }
                },
                "match": 0
              },
              {
                "type": "literal",
                "value": "-",
                "ignoreCase": false,
                "location": {
                  "source": "grammar/peg.pegjs",
                  "start": {
                    "offset": 786,
                    "line": 44,
                    "column": 23
                  },
                  "end": {
                    "offset": 789,
                    "line": 44,
                    "column": 26
                  }
                },
                "match": 0
              },
              {
                "type": "class",
                "parts": [
                  "[",
                  "]",
                  "-"
                ],
                "inverted": true,
                "ignoreCase": false,
                "location": {
                  "source": "grammar/peg.pegjs",
                  "start": {
                    "offset": 790,
                    "line": 44,
                    "column": 27
                  },
                  "end": {
                    "offset": 797,
                    "line": 44,
                    "column": 34
                  }
                },
                "match": 0
              }
            ],
            "location": {
              "source": "grammar/peg.pegjs",
              "start": {
                "offset": 778,
                "line": 44,
                "column": 15
              },
              "end": {
                "offset": 797,
                "line": 44,
                "column": 34
              }
            },
            "match": 0
          },
          {
            "type": "one_or_more",
            "expression": {
              "type": "class",
              "parts": [
                "[",
                "]"
              ],
              "inverted": true,
              "ignoreCase": false,
              "location": {
                "source": "grammar/peg.pegjs",
                "start": {
                  "offset": 803,
                  "line": 45,
                  "column": 6
                },
                "end": {
                  "offset": 809,
                  "line": 45,
                  "column": 12
                }
              },
              "match": 0
            },
            "location": {
              "source": "grammar/peg.pegjs",
              "start": {
                "offset": 803,
                "line": 45,
                "column": 6
              },
              "end": {
                "offset": 810,
                "line": 45,
                "column": 13
              }
            },
            "match": 0
          }
        ],
        "location": {
          "source": "grammar/peg.pegjs",
          "start": {
            "offset": 778,
            "line": 44,
            "column": 15
          },
          "end": {
            "offset": 810,
            "line": 45,
            "column": 13
          }
        },
        "match": 0
      },
      "location": {
        "source": "grammar/peg.pegjs",
        "start": {
          "offset": 764,
          "line": 44,
          "column": 1
        },
        "end": {
          "offset": 811,
          "line": 46,
          "column": 1
        }
      },
      "match": 0,
      "bytecode": [
        5,
        20,
        5,
        2,
        2,
        21,
        1,
        23,
        19,
        15,
        33,
        3,
        18,
        14,
        2,
        2,
        22,
        14,
        23,
        20,
        15,
        18,
        4,
        20,
        5,
        2,
        2,
        21,
        1,
        23,
        19,
        15,
        3,
        4,
        11,
        3,
        9,
        8,
        3,
        7,
        3,
        8,
        2,
        7,
        3,
        6,
        7,
        3,
        14,
        28,
        0,
        6,
        4,
        20,
        6,
        2,
        2,
        21,
        1,
        23,
        21,
        15,
        12,
        3,
        16,
        9,
        10,
        20,
        6,
        2,
        2,
        21,
        1,
        23,
        21,
        6,
        6,
        6,
        3
      ]
    },
    {
      "type": "rule",
      "name": "identifier",
      "nameLocation": {
        "source": "grammar/peg.pegjs",
        "start": {
          "offset": 812,
          "line": 47,
          "column": 1
        },
        "end": {
          "offset": 822,
          "line": 47,
          "column": 11
        }
      },
      "expression": {
        "type": "named",
        "name": "identificador",
        "expression": {
          "type": "sequence",
          "elements": [
            {
              "type": "class",
              "parts": [
                "_",
                [
                  "a",
                  "z"
                ]
              ],
              "inverted": false,
              "ignoreCase": true,
              "location": {
                "source": "grammar/peg.pegjs",
                "start": {
                  "offset": 843,
                  "line": 48,
                  "column": 5
                },
                "end": {
                  "offset": 850,
                  "line": 48,
                  "column": 12
                }
              },
              "match": 0
            },
            {
              "type": "zero_or_more",
              "expression": {
                "type": "class",
                "parts": [
                  "_",
                  [
                    "a",
                    "z"
                  ],
                  [
                    "0",
                    "9"
                  ]
                ],
                "inverted": false,
                "ignoreCase": true,
                "location": {
                  "source": "grammar/peg.pegjs",
                  "start": {
                    "offset": 850,
                    "line": 48,
                    "column": 12
                  },
                  "end": {
                    "offset": 860,
                    "line": 48,
                    "column": 22
                  }
                },
                "match": 0
              },
              "location": {
                "source": "grammar/peg.pegjs",
                "start": {
                  "offset": 850,
                  "line": 48,
                  "column": 12
                },
                "end": {
                  "offset": 861,
                  "line": 48,
                  "column": 23
                }
              },
              "match": 1
            }
          ],
          "location": {
            "source": "grammar/peg.pegjs",
            "start": {
              "offset": 843,
              "line": 48,
              "column": 5
            },
            "end": {
              "offset": 861,
              "line": 48,
              "column": 23
            }
          },
          "match": 0
        },
        "location": {
          "source": "grammar/peg.pegjs",
          "start": {
            "offset": 812,
            "line": 47,
            "column": 1
          },
          "end": {
            "offset": 862,
            "line": 49,
            "column": 1
          }
        },
        "match": 0
      },
      "location": {
        "source": "grammar/peg.pegjs",
        "start": {
          "offset": 812,
          "line": 47,
          "column": 1
        },
        "end": {
          "offset": 862,
          "line": 49,
          "column": 1
        }
      },
      "match": 0,
      "bytecode": [
        28,
        5,
        20,
        7,
        2,
        2,
        21,
        1,
        23,
        23,
        15,
        24,
        3,
        4,
        20,
        8,
        2,
        2,
        21,
        1,
        23,
        24,
        16,
        9,
        10,
        20,
        8,
        2,
        2,
        21,
        1,
        23,
        24,
        6,
        11,
        2,
        9,
        6,
        7,
        3,
        29,
        14,
        2,
        0,
        23,
        22
      ]
    },
    {
      "type": "rule",
      "name": "_",
      "nameLocation": {
        "source": "grammar/peg.pegjs",
        "start": {
          "offset": 863,
          "line": 50,
          "column": 1
        },
        "end": {
          "offset": 864,
          "line": 50,
          "column": 2
        }
      },
      "expression": {
        "type": "named",
        "name": "Espacios en blanco",
        "expression": {
          "type": "zero_or_more",
          "expression": {
            "type": "class",
            "parts": [
              " ",
              "\t",
              "\n",
              "\r"
            ],
            "inverted": false,
            "ignoreCase": false,
            "location": {
              "source": "grammar/peg.pegjs",
              "start": {
                "offset": 890,
                "line": 51,
                "column": 5
              },
              "end": {
                "offset": 899,
                "line": 51,
                "column": 14
              }
            },
            "match": 0
          },
          "location": {
            "source": "grammar/peg.pegjs",
            "start": {
              "offset": 890,
              "line": 51,
              "column": 5
            },
            "end": {
              "offset": 900,
              "line": 51,
              "column": 15
            }
          },
          "match": 1
        },
        "location": {
          "source": "grammar/peg.pegjs",
          "start": {
            "offset": 863,
            "line": 50,
            "column": 1
          },
          "end": {
            "offset": 901,
            "line": 52,
            "column": 1
          }
        },
        "match": 1
      },
      "location": {
        "source": "grammar/peg.pegjs",
        "start": {
          "offset": 863,
          "line": 50,
          "column": 1
        },
        "end": {
          "offset": 901,
          "line": 52,
          "column": 1
        }
      },
      "match": 1,
      "bytecode": [
        28,
        4,
        20,
        9,
        2,
        2,
        21,
        1,
        23,
        26,
        16,
        9,
        10,
        20,
        9,
        2,
        2,
        21,
        1,
        23,
        26,
        6,
        29,
        23,
        25
      ]
    },
    {
      "type": "rule",
      "name": "number",
      "nameLocation": {
        "source": "grammar/peg.pegjs",
        "start": {
          "offset": 902,
          "line": 53,
          "column": 1
        },
        "end": {
          "offset": 908,
          "line": 53,
          "column": 7
        }
      },
      "expression": {
        "type": "one_or_more",
        "expression": {
          "type": "class",
          "parts": [
            [
              "0",
              "9"
            ]
          ],
          "inverted": false,
          "ignoreCase": false,
          "location": {
            "source": "grammar/peg.pegjs",
            "start": {
              "offset": 913,
              "line": 54,
              "column": 5
            },
            "end": {
              "offset": 918,
              "line": 54,
              "column": 10
            }
          },
          "match": 0
        },
        "location": {
          "source": "grammar/peg.pegjs",
          "start": {
            "offset": 913,
            "line": 54,
            "column": 5
          },
          "end": {
            "offset": 919,
            "line": 54,
            "column": 11
          }
        },
        "match": 0
      },
      "location": {
        "source": "grammar/peg.pegjs",
        "start": {
          "offset": 902,
          "line": 53,
          "column": 1
        },
        "end": {
          "offset": 919,
          "line": 54,
          "column": 11
        }
      },
      "match": 0,
      "bytecode": [
        4,
        20,
        10,
        2,
        2,
        21,
        1,
        23,
        27,
        15,
        12,
        3,
        16,
        9,
        10,
        20,
        10,
        2,
        2,
        21,
        1,
        23,
        27,
        6,
        6,
        6,
        3
      ]
    }
  ],
  "location": {
    "source": "grammar/peg.pegjs",
    "start": {
      "offset": 0,
      "line": 1,
      "column": 1
    },
    "end": {
      "offset": 919,
      "line": 54,
      "column": 11
    }
  },
  "literals": [
    "=",
    ";",
    "/",
    "@",
    ":",
    "$",
    "|",
    "..",
    ",",
    "i",
    "(",
    ")",
    "[",
    "]",
    "-"
  ],
  "classes": [
    {
      "value": [
        "?",
        "+",
        "*"
      ],
      "inverted": false,
      "ignoreCase": false
    },
    {
      "value": [
        "\""
      ],
      "inverted": false,
      "ignoreCase": false
    },
    {
      "value": [
        "\""
      ],
      "inverted": true,
      "ignoreCase": false
    },
    {
      "value": [
        "'"
      ],
      "inverted": false,
      "ignoreCase": false
    },
    {
      "value": [
        "'"
      ],
      "inverted": true,
      "ignoreCase": false
    },
    {
      "value": [
        "[",
        "]",
        "-"
      ],
      "inverted": true,
      "ignoreCase": false
    },
    {
      "value": [
        "[",
        "]"
      ],
      "inverted": true,
      "ignoreCase": false
    },
    {
      "value": [
        "_",
        [
          "a",
          "z"
        ]
      ],
      "inverted": false,
      "ignoreCase": true
    },
    {
      "value": [
        "_",
        [
          "a",
          "z"
        ],
        [
          "0",
          "9"
        ]
      ],
      "inverted": false,
      "ignoreCase": true
    },
    {
      "value": [
        " ",
        "\t",
        "\n",
        "\r"
      ],
      "inverted": false,
      "ignoreCase": false
    },
    {
      "value": [
        [
          "0",
          "9"
        ]
      ],
      "inverted": false,
      "ignoreCase": false
    }
  ],
  "expectations": [
    {
      "type": "literal",
      "value": "=",
      "ignoreCase": false
    },
    {
      "type": "literal",
      "value": ";",
      "ignoreCase": false
    },
    {
      "type": "literal",
      "value": "/",
      "ignoreCase": false
    },
    {
      "type": "literal",
      "value": "@",
      "ignoreCase": false
    },
    {
      "type": "literal",
      "value": ":",
      "ignoreCase": false
    },
    {
      "type": "literal",
      "value": "$",
      "ignoreCase": false
    },
    {
      "type": "class",
      "value": [
        "?",
        "+",
        "*"
      ],
      "inverted": false,
      "ignoreCase": false
    },
    {
      "type": "literal",
      "value": "|",
      "ignoreCase": false
    },
    {
      "type": "literal",
      "value": "..",
      "ignoreCase": false
    },
    {
      "type": "literal",
      "value": ",",
      "ignoreCase": false
    },
    {
      "type": "literal",
      "value": "i",
      "ignoreCase": false
    },
    {
      "type": "literal",
      "value": "(",
      "ignoreCase": false
    },
    {
      "type": "literal",
      "value": ")",
      "ignoreCase": false
    },
    {
      "type": "class",
      "value": [
        "\""
      ],
      "inverted": false,
      "ignoreCase": false
    },
    {
      "type": "class",
      "value": [
        "\""
      ],
      "inverted": true,
      "ignoreCase": false
    },
    {
      "type": "class",
      "value": [
        "'"
      ],
      "inverted": false,
      "ignoreCase": false
    },
    {
      "type": "class",
      "value": [
        "'"
      ],
      "inverted": true,
      "ignoreCase": false
    },
    {
      "type": "literal",
      "value": "[",
      "ignoreCase": false
    },
    {
      "type": "literal",
      "value": "]",
      "ignoreCase": false
    },
    {
      "type": "class",
      "value": [
        "[",
        "]",
        "-"
      ],
      "inverted": true,
      "ignoreCase": false
    },
    {
      "type": "literal",
      "value": "-",
      "ignoreCase": false
    },
    {
      "type": "class",
      "value": [
        "[",
        "]"
      ],
      "inverted": true,
      "ignoreCase": false
    },
    {
      "type": "rule",
      "value": "identificador"
    },
    {
      "type": "class",
      "value": [
        "_",
        [
          "a",
          "z"
        ]
      ],
      "inverted": false,
      "ignoreCase": true
    },
    {
      "type": "class",
      "value": [
        "_",
        [
          "a",
          "z"
        ],
        [
          "0",
          "9"
        ]
      ],
      "inverted": false,
      "ignoreCase": true
    },
    {
      "type": "rule",
      "value": "Espacios en blanco"
    },
    {
      "type": "class",
      "value": [
        " ",
        "\t",
        "\n",
        "\r"
      ],
      "inverted": false,
      "ignoreCase": false
    },
    {
      "type": "class",
      "value": [
        [
          "0",
          "9"
        ]
      ],
      "inverted": false,
      "ignoreCase": false
    }
  ],
  "importedNames": [],
  "functions": [],
  "locations": [],
  "code": {
    "children": [
      "// @generated by Peggy 4.2.0.\n",
      "//\n",
      "// https://peggyjs.org/\n",
      "\n",
      "\"use strict\";\n",
      "\n",
      "\n",
      {
        "children": [
          "function peg$subclass(child, parent) {\n",
          "  function C() { this.constructor = child; }\n",
          "  C.prototype = parent.prototype;\n",
          "  child.prototype = new C();\n",
          "}\n",
          "\n",
          "function peg$SyntaxError(message, expected, found, location) {\n",
          "  var self = Error.call(this, message);\n",
          "  // istanbul ignore next Check is a necessary evil to support older environments\n",
          "  if (Object.setPrototypeOf) {\n",
          "    Object.setPrototypeOf(self, peg$SyntaxError.prototype);\n",
          "  }\n",
          "  self.expected = expected;\n",
          "  self.found = found;\n",
          "  self.location = location;\n",
          "  self.name = \"SyntaxError\";\n",
          "  return self;\n",
          "}\n",
          "\n",
          "peg$subclass(peg$SyntaxError, Error);\n",
          "\n",
          "function peg$padEnd(str, targetLength, padString) {\n",
          "  padString = padString || \" \";\n",
          "  if (str.length > targetLength) { return str; }\n",
          "  targetLength -= str.length;\n",
          "  padString += padString.repeat(targetLength);\n",
          "  return str + padString.slice(0, targetLength);\n",
          "}\n",
          "\n",
          "peg$SyntaxError.prototype.format = function(sources) {\n",
          "  var str = \"Error: \" + this.message;\n",
          "  if (this.location) {\n",
          "    var src = null;\n",
          "    var k;\n",
          "    for (k = 0; k < sources.length; k++) {\n",
          "      if (sources[k].source === this.location.source) {\n",
          "        src = sources[k].text.split(/\\r\\n|\\n|\\r/g);\n",
          "        break;\n",
          "      }\n",
          "    }\n",
          "    var s = this.location.start;\n",
          "    var offset_s = (this.location.source && (typeof this.location.source.offset === \"function\"))\n",
          "      ? this.location.source.offset(s)\n",
          "      : s;\n",
          "    var loc = this.location.source + \":\" + offset_s.line + \":\" + offset_s.column;\n",
          "    if (src) {\n",
          "      var e = this.location.end;\n",
          "      var filler = peg$padEnd(\"\", offset_s.line.toString().length, ' ');\n",
          "      var line = src[s.line - 1];\n",
          "      var last = s.line === e.line ? e.column : line.length + 1;\n",
          "      var hatLen = (last - s.column) || 1;\n",
          "      str += \"\\n --> \" + loc + \"\\n\"\n",
          "          + filler + \" |\\n\"\n",
          "          + offset_s.line + \" | \" + line + \"\\n\"\n",
          "          + filler + \" | \" + peg$padEnd(\"\", s.column - 1, ' ')\n",
          "          + peg$padEnd(\"\", hatLen, \"^\");\n",
          "    } else {\n",
          "      str += \"\\n at \" + loc;\n",
          "    }\n",
          "  }\n",
          "  return str;\n",
          "};\n",
          "\n",
          "peg$SyntaxError.buildMessage = function(expected, found) {\n",
          "  var DESCRIBE_EXPECTATION_FNS = {\n",
          "    literal: function(expectation) {\n",
          "      return \"\\\"\" + literalEscape(expectation.text) + \"\\\"\";\n",
          "    },\n",
          "\n",
          "    class: function(expectation) {\n",
          "      var escapedParts = expectation.parts.map(function(part) {\n",
          "        return Array.isArray(part)\n",
          "          ? classEscape(part[0]) + \"-\" + classEscape(part[1])\n",
          "          : classEscape(part);\n",
          "      });\n",
          "\n",
          "      return \"[\" + (expectation.inverted ? \"^\" : \"\") + escapedParts.join(\"\") + \"]\";\n",
          "    },\n",
          "\n",
          "    any: function() {\n",
          "      return \"any character\";\n",
          "    },\n",
          "\n",
          "    end: function() {\n",
          "      return \"end of input\";\n",
          "    },\n",
          "\n",
          "    other: function(expectation) {\n",
          "      return expectation.description;\n",
          "    }\n",
          "  };\n",
          "\n",
          "  function hex(ch) {\n",
          "    return ch.charCodeAt(0).toString(16).toUpperCase();\n",
          "  }\n",
          "\n",
          "  function literalEscape(s) {\n",
          "    return s\n",
          "      .replace(/\\\\/g, \"\\\\\\\\\")\n",
          "      .replace(/\"/g,  \"\\\\\\\"\")\n",
          "      .replace(/\\0/g, \"\\\\0\")\n",
          "      .replace(/\\t/g, \"\\\\t\")\n",
          "      .replace(/\\n/g, \"\\\\n\")\n",
          "      .replace(/\\r/g, \"\\\\r\")\n",
          "      .replace(/[\\x00-\\x0F]/g,          function(ch) { return \"\\\\x0\" + hex(ch); })\n",
          "      .replace(/[\\x10-\\x1F\\x7F-\\x9F]/g, function(ch) { return \"\\\\x\"  + hex(ch); });\n",
          "  }\n",
          "\n",
          "  function classEscape(s) {\n",
          "    return s\n",
          "      .replace(/\\\\/g, \"\\\\\\\\\")\n",
          "      .replace(/\\]/g, \"\\\\]\")\n",
          "      .replace(/\\^/g, \"\\\\^\")\n",
          "      .replace(/-/g,  \"\\\\-\")\n",
          "      .replace(/\\0/g, \"\\\\0\")\n",
          "      .replace(/\\t/g, \"\\\\t\")\n",
          "      .replace(/\\n/g, \"\\\\n\")\n",
          "      .replace(/\\r/g, \"\\\\r\")\n",
          "      .replace(/[\\x00-\\x0F]/g,          function(ch) { return \"\\\\x0\" + hex(ch); })\n",
          "      .replace(/[\\x10-\\x1F\\x7F-\\x9F]/g, function(ch) { return \"\\\\x\"  + hex(ch); });\n",
          "  }\n",
          "\n",
          "  function describeExpectation(expectation) {\n",
          "    return DESCRIBE_EXPECTATION_FNS[expectation.type](expectation);\n",
          "  }\n",
          "\n",
          "  function describeExpected(expected) {\n",
          "    var descriptions = expected.map(describeExpectation);\n",
          "    var i, j;\n",
          "\n",
          "    descriptions.sort();\n",
          "\n",
          "    if (descriptions.length > 0) {\n",
          "      for (i = 1, j = 1; i < descriptions.length; i++) {\n",
          "        if (descriptions[i - 1] !== descriptions[i]) {\n",
          "          descriptions[j] = descriptions[i];\n",
          "          j++;\n",
          "        }\n",
          "      }\n",
          "      descriptions.length = j;\n",
          "    }\n",
          "\n",
          "    switch (descriptions.length) {\n",
          "      case 1:\n",
          "        return descriptions[0];\n",
          "\n",
          "      case 2:\n",
          "        return descriptions[0] + \" or \" + descriptions[1];\n",
          "\n",
          "      default:\n",
          "        return descriptions.slice(0, -1).join(\", \")\n",
          "          + \", or \"\n",
          "          + descriptions[descriptions.length - 1];\n",
          "    }\n",
          "  }\n",
          "\n",
          "  function describeFound(found) {\n",
          "    return found ? \"\\\"\" + literalEscape(found) + \"\\\"\" : \"end of input\";\n",
          "  }\n",
          "\n",
          "  return \"Expected \" + describeExpected(expected) + \" but \" + describeFound(found) + \" found.\";\n",
          "};\n",
          "\n",
          "function peg$parse(input, options) {\n",
          "  options = options !== undefined ? options : {};\n",
          "\n",
          "  var peg$FAILED = {};\n",
          "  var peg$source = options.grammarSource;\n",
          "\n",
          "  var peg$startRuleFunctions = { grammar: peg$parsegrammar };\n",
          "  var peg$startRuleFunction = peg$parsegrammar;\n",
          "\n",
          {
            "children": [
              "  var peg$c0 = \"=\";\n  var peg$c1 = \";\";\n  var peg$c2 = \"/\";\n  var peg$c3 = \"@\";\n  var peg$c4 = \":\";\n  var peg$c5 = \"$\";\n  var peg$c6 = \"|\";\n  var peg$c7 = \"..\";\n  var peg$c8 = \",\";\n  var peg$c9 = \"i\";\n  var peg$c10 = \"(\";\n  var peg$c11 = \")\";\n  var peg$c12 = \"[\";\n  var peg$c13 = \"]\";\n  var peg$c14 = \"-\";\n\n  var peg$r0 = /^[?+*]/;\n  var peg$r1 = /^[\"]/;\n  var peg$r2 = /^[^\"]/;\n  var peg$r3 = /^[']/;\n  var peg$r4 = /^[^']/;\n  var peg$r5 = /^[^[\\]\\-]/;\n  var peg$r6 = /^[^[\\]]/;\n  var peg$r7 = /^[_a-z]/i;\n  var peg$r8 = /^[_a-z0-9]/i;\n  var peg$r9 = /^[ \\t\\n\\r]/;\n  var peg$r10 = /^[0-9]/;\n\n  var peg$e0 = peg$literalExpectation(\"=\", false);\n  var peg$e1 = peg$literalExpectation(\";\", false);\n  var peg$e2 = peg$literalExpectation(\"/\", false);\n  var peg$e3 = peg$literalExpectation(\"@\", false);\n  var peg$e4 = peg$literalExpectation(\":\", false);\n  var peg$e5 = peg$literalExpectation(\"$\", false);\n  var peg$e6 = peg$classExpectation([\"?\", \"+\", \"*\"], false, false);\n  var peg$e7 = peg$literalExpectation(\"|\", false);\n  var peg$e8 = peg$literalExpectation(\"..\", false);\n  var peg$e9 = peg$literalExpectation(\",\", false);\n  var peg$e10 = peg$literalExpectation(\"i\", false);\n  var peg$e11 = peg$literalExpectation(\"(\", false);\n  var peg$e12 = peg$literalExpectation(\")\", false);\n  var peg$e13 = peg$classExpectation([\"\\\"\"], false, false);\n  var peg$e14 = peg$classExpectation([\"\\\"\"], true, false);\n  var peg$e15 = peg$classExpectation([\"'\"], false, false);\n  var peg$e16 = peg$classExpectation([\"'\"], true, false);\n  var peg$e17 = peg$literalExpectation(\"[\", false);\n  var peg$e18 = peg$literalExpectation(\"]\", false);\n  var peg$e19 = peg$classExpectation([\"[\", \"]\", \"-\"], true, false);\n  var peg$e20 = peg$literalExpectation(\"-\", false);\n  var peg$e21 = peg$classExpectation([\"[\", \"]\"], true, false);\n  var peg$e22 = peg$otherExpectation(\"identificador\");\n  var peg$e23 = peg$classExpectation([\"_\", [\"a\", \"z\"]], false, true);\n  var peg$e24 = peg$classExpectation([\"_\", [\"a\", \"z\"], [\"0\", \"9\"]], false, true);\n  var peg$e25 = peg$otherExpectation(\"Espacios en blanco\");\n  var peg$e26 = peg$classExpectation([\" \", \"\\t\", \"\\n\", \"\\r\"], false, false);\n  var peg$e27 = peg$classExpectation([[\"0\", \"9\"]], false, false);\n"
            ],
            "sourceContents": {},
            "line": null,
            "column": null,
            "source": "grammar/peg.pegjs",
            "name": null,
            "$$$isSourceNode$$$": true
          },
          "\n",
          "  var peg$currPos = options.peg$currPos | 0;\n",
          "  var peg$savedPos = peg$currPos;\n",
          "  var peg$posDetailsCache = [{ line: 1, column: 1 }];\n",
          "  var peg$maxFailPos = peg$currPos;\n",
          "  var peg$maxFailExpected = options.peg$maxFailExpected || [];\n",
          "  var peg$silentFails = options.peg$silentFails | 0;\n",
          "\n",
          "  var peg$result;\n",
          "\n",
          "  if (options.startRule) {\n",
          "    if (!(options.startRule in peg$startRuleFunctions)) {\n",
          "      throw new Error(\"Can't start parsing from rule \\\"\" + options.startRule + \"\\\".\");\n",
          "    }\n",
          "\n",
          "    peg$startRuleFunction = peg$startRuleFunctions[options.startRule];\n",
          "  }\n",
          "\n",
          "  function text() {\n",
          "    return input.substring(peg$savedPos, peg$currPos);\n",
          "  }\n",
          "\n",
          "  function offset() {\n",
          "    return peg$savedPos;\n",
          "  }\n",
          "\n",
          "  function range() {\n",
          "    return {\n",
          "      source: peg$source,\n",
          "      start: peg$savedPos,\n",
          "      end: peg$currPos\n",
          "    };\n",
          "  }\n",
          "\n",
          "  function location() {\n",
          "    return peg$computeLocation(peg$savedPos, peg$currPos);\n",
          "  }\n",
          "\n",
          "  function expected(description, location) {\n",
          "    location = location !== undefined\n",
          "      ? location\n",
          "      : peg$computeLocation(peg$savedPos, peg$currPos);\n",
          "\n",
          "    throw peg$buildStructuredError(\n",
          "      [peg$otherExpectation(description)],\n",
          "      input.substring(peg$savedPos, peg$currPos),\n",
          "      location\n",
          "    );\n",
          "  }\n",
          "\n",
          "  function error(message, location) {\n",
          "    location = location !== undefined\n",
          "      ? location\n",
          "      : peg$computeLocation(peg$savedPos, peg$currPos);\n",
          "\n",
          "    throw peg$buildSimpleError(message, location);\n",
          "  }\n",
          "\n",
          "  function peg$literalExpectation(text, ignoreCase) {\n",
          "    return { type: \"literal\", text: text, ignoreCase: ignoreCase };\n",
          "  }\n",
          "\n",
          "  function peg$classExpectation(parts, inverted, ignoreCase) {\n",
          "    return { type: \"class\", parts: parts, inverted: inverted, ignoreCase: ignoreCase };\n",
          "  }\n",
          "\n",
          "  function peg$anyExpectation() {\n",
          "    return { type: \"any\" };\n",
          "  }\n",
          "\n",
          "  function peg$endExpectation() {\n",
          "    return { type: \"end\" };\n",
          "  }\n",
          "\n",
          "  function peg$otherExpectation(description) {\n",
          "    return { type: \"other\", description: description };\n",
          "  }\n",
          "\n",
          "  function peg$computePosDetails(pos) {\n",
          "    var details = peg$posDetailsCache[pos];\n",
          "    var p;\n",
          "\n",
          "    if (details) {\n",
          "      return details;\n",
          "    } else {\n",
          "      if (pos >= peg$posDetailsCache.length) {\n",
          "        p = peg$posDetailsCache.length - 1;\n",
          "      } else {\n",
          "        p = pos;\n",
          "        while (!peg$posDetailsCache[--p]) {}\n",
          "      }\n",
          "\n",
          "      details = peg$posDetailsCache[p];\n",
          "      details = {\n",
          "        line: details.line,\n",
          "        column: details.column\n",
          "      };\n",
          "\n",
          "      while (p < pos) {\n",
          "        if (input.charCodeAt(p) === 10) {\n",
          "          details.line++;\n",
          "          details.column = 1;\n",
          "        } else {\n",
          "          details.column++;\n",
          "        }\n",
          "\n",
          "        p++;\n",
          "      }\n",
          "\n",
          "      peg$posDetailsCache[pos] = details;\n",
          "\n",
          "      return details;\n",
          "    }\n",
          "  }\n",
          "\n",
          "  function peg$computeLocation(startPos, endPos, offset) {\n",
          "    var startPosDetails = peg$computePosDetails(startPos);\n",
          "    var endPosDetails = peg$computePosDetails(endPos);\n",
          "\n",
          "    var res = {\n",
          "      source: peg$source,\n",
          "      start: {\n",
          "        offset: startPos,\n",
          "        line: startPosDetails.line,\n",
          "        column: startPosDetails.column\n",
          "      },\n",
          "      end: {\n",
          "        offset: endPos,\n",
          "        line: endPosDetails.line,\n",
          "        column: endPosDetails.column\n",
          "      }\n",
          "    };\n",
          "    if (offset && peg$source && (typeof peg$source.offset === \"function\")) {\n",
          "      res.start = peg$source.offset(res.start);\n",
          "      res.end = peg$source.offset(res.end);\n",
          "    }\n",
          "    return res;\n",
          "  }\n",
          "\n",
          "  function peg$fail(expected) {\n",
          "    if (peg$currPos < peg$maxFailPos) { return; }\n",
          "\n",
          "    if (peg$currPos > peg$maxFailPos) {\n",
          "      peg$maxFailPos = peg$currPos;\n",
          "      peg$maxFailExpected = [];\n",
          "    }\n",
          "\n",
          "    peg$maxFailExpected.push(expected);\n",
          "  }\n",
          "\n",
          "  function peg$buildSimpleError(message, location) {\n",
          "    return new peg$SyntaxError(message, null, null, location);\n",
          "  }\n",
          "\n",
          "  function peg$buildStructuredError(expected, found, location) {\n",
          "    return new peg$SyntaxError(\n",
          "      peg$SyntaxError.buildMessage(expected, found),\n",
          "      expected,\n",
          "      found,\n",
          "      location\n",
          "    );\n",
          "  }\n",
          "\n",
          {
            "children": [
              "  function ",
              {
                "children": [
                  "peg$parsegrammar"
                ],
                "sourceContents": {},
                "line": 1,
                "column": 0,
                "source": "grammar/peg.pegjs",
                "name": "grammar",
                "$$$isSourceNode$$$": true
              },
              {
                "children": [
                  "() {\n"
                ],
                "sourceContents": {},
                "line": 1,
                "column": 7,
                "source": "grammar/peg.pegjs",
                "name": null,
                "$$$isSourceNode$$$": true
              }
            ],
            "sourceContents": {},
            "line": null,
            "column": null,
            "source": "grammar/peg.pegjs",
            "name": null,
            "$$$isSourceNode$$$": true
          },
          "    var s0, s1, s2;\n",
          "\n",
          "    s0 = peg$currPos;\n",
          "    s1 = [];\n",
          "    s2 = peg$parserule();\n",
          "    if (s2 !== peg$FAILED) {\n",
          "      while (s2 !== peg$FAILED) {\n",
          "        s1.push(s2);\n",
          "        s2 = peg$parserule();\n",
          "      }\n",
          "    } else {\n",
          "      s1 = peg$FAILED;\n",
          "    }\n",
          "    if (s1 !== peg$FAILED) {\n",
          "      s2 = peg$parse_();\n",
          "      s1 = [s1, s2];\n",
          "      s0 = s1;\n",
          "    } else {\n",
          "      peg$currPos = s0;\n",
          "      s0 = peg$FAILED;\n",
          "    }\n",
          "\n",
          "    return s0;\n",
          "  }\n",
          "\n",
          {
            "children": [
              "  function ",
              {
                "children": [
                  "peg$parserule"
                ],
                "sourceContents": {},
                "line": 4,
                "column": 0,
                "source": "grammar/peg.pegjs",
                "name": "rule",
                "$$$isSourceNode$$$": true
              },
              {
                "children": [
                  "() {\n"
                ],
                "sourceContents": {},
                "line": 4,
                "column": 4,
                "source": "grammar/peg.pegjs",
                "name": null,
                "$$$isSourceNode$$$": true
              }
            ],
            "sourceContents": {},
            "line": null,
            "column": null,
            "source": "grammar/peg.pegjs",
            "name": null,
            "$$$isSourceNode$$$": true
          },
          "    var s0, s1, s2, s3, s4, s5, s6, s7, s8, s9, s10, s11;\n",
          "\n",
          "    s0 = peg$currPos;\n",
          "    s1 = peg$parse_();\n",
          "    s2 = peg$parseidentifier();\n",
          "    if (s2 !== peg$FAILED) {\n",
          "      s3 = peg$parse_();\n",
          "      s4 = peg$parsestring();\n",
          "      if (s4 === peg$FAILED) {\n",
          "        s4 = null;\n",
          "      }\n",
          "      s5 = peg$parse_();\n",
          "      if (input.charCodeAt(peg$currPos) === 61) {\n",
          "        s6 = peg$c0;\n",
          "        peg$currPos++;\n",
          "      } else {\n",
          "        s6 = peg$FAILED;\n",
          "        if (peg$silentFails === 0) { peg$fail(peg$e0); }\n",
          "      }\n",
          "      if (s6 !== peg$FAILED) {\n",
          "        s7 = peg$parse_();\n",
          "        s8 = peg$parsechoice();\n",
          "        if (s8 !== peg$FAILED) {\n",
          "          s9 = peg$currPos;\n",
          "          s10 = peg$parse_();\n",
          "          if (input.charCodeAt(peg$currPos) === 59) {\n",
          "            s11 = peg$c1;\n",
          "            peg$currPos++;\n",
          "          } else {\n",
          "            s11 = peg$FAILED;\n",
          "            if (peg$silentFails === 0) { peg$fail(peg$e1); }\n",
          "          }\n",
          "          if (s11 !== peg$FAILED) {\n",
          "            s10 = [s10, s11];\n",
          "            s9 = s10;\n",
          "          } else {\n",
          "            peg$currPos = s9;\n",
          "            s9 = peg$FAILED;\n",
          "          }\n",
          "          if (s9 === peg$FAILED) {\n",
          "            s9 = null;\n",
          "          }\n",
          "          s1 = [s1, s2, s3, s4, s5, s6, s7, s8, s9];\n",
          "          s0 = s1;\n",
          "        } else {\n",
          "          peg$currPos = s0;\n",
          "          s0 = peg$FAILED;\n",
          "        }\n",
          "      } else {\n",
          "        peg$currPos = s0;\n",
          "        s0 = peg$FAILED;\n",
          "      }\n",
          "    } else {\n",
          "      peg$currPos = s0;\n",
          "      s0 = peg$FAILED;\n",
          "    }\n",
          "\n",
          "    return s0;\n",
          "  }\n",
          "\n",
          {
            "children": [
              "  function ",
              {
                "children": [
                  "peg$parsechoice"
                ],
                "sourceContents": {},
                "line": 7,
                "column": 0,
                "source": "grammar/peg.pegjs",
                "name": "choice",
                "$$$isSourceNode$$$": true
              },
              {
                "children": [
                  "() {\n"
                ],
                "sourceContents": {},
                "line": 7,
                "column": 6,
                "source": "grammar/peg.pegjs",
                "name": null,
                "$$$isSourceNode$$$": true
              }
            ],
            "sourceContents": {},
            "line": null,
            "column": null,
            "source": "grammar/peg.pegjs",
            "name": null,
            "$$$isSourceNode$$$": true
          },
          "    var s0, s1, s2, s3, s4, s5, s6, s7;\n",
          "\n",
          "    s0 = peg$currPos;\n",
          "    s1 = peg$parseconcatenation();\n",
          "    if (s1 !== peg$FAILED) {\n",
          "      s2 = [];\n",
          "      s3 = peg$currPos;\n",
          "      s4 = peg$parse_();\n",
          "      if (input.charCodeAt(peg$currPos) === 47) {\n",
          "        s5 = peg$c2;\n",
          "        peg$currPos++;\n",
          "      } else {\n",
          "        s5 = peg$FAILED;\n",
          "        if (peg$silentFails === 0) { peg$fail(peg$e2); }\n",
          "      }\n",
          "      if (s5 !== peg$FAILED) {\n",
          "        s6 = peg$parse_();\n",
          "        s7 = peg$parseconcatenation();\n",
          "        if (s7 !== peg$FAILED) {\n",
          "          s4 = [s4, s5, s6, s7];\n",
          "          s3 = s4;\n",
          "        } else {\n",
          "          peg$currPos = s3;\n",
          "          s3 = peg$FAILED;\n",
          "        }\n",
          "      } else {\n",
          "        peg$currPos = s3;\n",
          "        s3 = peg$FAILED;\n",
          "      }\n",
          "      while (s3 !== peg$FAILED) {\n",
          "        s2.push(s3);\n",
          "        s3 = peg$currPos;\n",
          "        s4 = peg$parse_();\n",
          "        if (input.charCodeAt(peg$currPos) === 47) {\n",
          "          s5 = peg$c2;\n",
          "          peg$currPos++;\n",
          "        } else {\n",
          "          s5 = peg$FAILED;\n",
          "          if (peg$silentFails === 0) { peg$fail(peg$e2); }\n",
          "        }\n",
          "        if (s5 !== peg$FAILED) {\n",
          "          s6 = peg$parse_();\n",
          "          s7 = peg$parseconcatenation();\n",
          "          if (s7 !== peg$FAILED) {\n",
          "            s4 = [s4, s5, s6, s7];\n",
          "            s3 = s4;\n",
          "          } else {\n",
          "            peg$currPos = s3;\n",
          "            s3 = peg$FAILED;\n",
          "          }\n",
          "        } else {\n",
          "          peg$currPos = s3;\n",
          "          s3 = peg$FAILED;\n",
          "        }\n",
          "      }\n",
          "      s1 = [s1, s2];\n",
          "      s0 = s1;\n",
          "    } else {\n",
          "      peg$currPos = s0;\n",
          "      s0 = peg$FAILED;\n",
          "    }\n",
          "\n",
          "    return s0;\n",
          "  }\n",
          "\n",
          {
            "children": [
              "  function ",
              {
                "children": [
                  "peg$parseconcatenation"
                ],
                "sourceContents": {},
                "line": 10,
                "column": 0,
                "source": "grammar/peg.pegjs",
                "name": "concatenation",
                "$$$isSourceNode$$$": true
              },
              {
                "children": [
                  "() {\n"
                ],
                "sourceContents": {},
                "line": 10,
                "column": 13,
                "source": "grammar/peg.pegjs",
                "name": null,
                "$$$isSourceNode$$$": true
              }
            ],
            "sourceContents": {},
            "line": null,
            "column": null,
            "source": "grammar/peg.pegjs",
            "name": null,
            "$$$isSourceNode$$$": true
          },
          "    var s0, s1, s2, s3, s4, s5, s6, s7, s8, s9, s10, s11;\n",
          "\n",
          "    s0 = peg$currPos;\n",
          "    s1 = peg$parsepluck();\n",
          "    if (s1 !== peg$FAILED) {\n",
          "      s2 = [];\n",
          "      s3 = peg$currPos;\n",
          "      s4 = peg$parse_();\n",
          "      s5 = peg$parsepluck();\n",
          "      if (s5 !== peg$FAILED) {\n",
          "        s6 = peg$currPos;\n",
          "        peg$silentFails++;\n",
          "        s7 = peg$currPos;\n",
          "        s8 = peg$parse_();\n",
          "        s9 = peg$parsestring();\n",
          "        if (s9 === peg$FAILED) {\n",
          "          s9 = null;\n",
          "        }\n",
          "        s10 = peg$parse_();\n",
          "        if (input.charCodeAt(peg$currPos) === 61) {\n",
          "          s11 = peg$c0;\n",
          "          peg$currPos++;\n",
          "        } else {\n",
          "          s11 = peg$FAILED;\n",
          "          if (peg$silentFails === 0) { peg$fail(peg$e0); }\n",
          "        }\n",
          "        if (s11 !== peg$FAILED) {\n",
          "          s8 = [s8, s9, s10, s11];\n",
          "          s7 = s8;\n",
          "        } else {\n",
          "          peg$currPos = s7;\n",
          "          s7 = peg$FAILED;\n",
          "        }\n",
          "        peg$silentFails--;\n",
          "        if (s7 === peg$FAILED) {\n",
          "          s6 = undefined;\n",
          "        } else {\n",
          "          peg$currPos = s6;\n",
          "          s6 = peg$FAILED;\n",
          "        }\n",
          "        if (s6 !== peg$FAILED) {\n",
          "          s4 = [s4, s5, s6];\n",
          "          s3 = s4;\n",
          "        } else {\n",
          "          peg$currPos = s3;\n",
          "          s3 = peg$FAILED;\n",
          "        }\n",
          "      } else {\n",
          "        peg$currPos = s3;\n",
          "        s3 = peg$FAILED;\n",
          "      }\n",
          "      while (s3 !== peg$FAILED) {\n",
          "        s2.push(s3);\n",
          "        s3 = peg$currPos;\n",
          "        s4 = peg$parse_();\n",
          "        s5 = peg$parsepluck();\n",
          "        if (s5 !== peg$FAILED) {\n",
          "          s6 = peg$currPos;\n",
          "          peg$silentFails++;\n",
          "          s7 = peg$currPos;\n",
          "          s8 = peg$parse_();\n",
          "          s9 = peg$parsestring();\n",
          "          if (s9 === peg$FAILED) {\n",
          "            s9 = null;\n",
          "          }\n",
          "          s10 = peg$parse_();\n",
          "          if (input.charCodeAt(peg$currPos) === 61) {\n",
          "            s11 = peg$c0;\n",
          "            peg$currPos++;\n",
          "          } else {\n",
          "            s11 = peg$FAILED;\n",
          "            if (peg$silentFails === 0) { peg$fail(peg$e0); }\n",
          "          }\n",
          "          if (s11 !== peg$FAILED) {\n",
          "            s8 = [s8, s9, s10, s11];\n",
          "            s7 = s8;\n",
          "          } else {\n",
          "            peg$currPos = s7;\n",
          "            s7 = peg$FAILED;\n",
          "          }\n",
          "          peg$silentFails--;\n",
          "          if (s7 === peg$FAILED) {\n",
          "            s6 = undefined;\n",
          "          } else {\n",
          "            peg$currPos = s6;\n",
          "            s6 = peg$FAILED;\n",
          "          }\n",
          "          if (s6 !== peg$FAILED) {\n",
          "            s4 = [s4, s5, s6];\n",
          "            s3 = s4;\n",
          "          } else {\n",
          "            peg$currPos = s3;\n",
          "            s3 = peg$FAILED;\n",
          "          }\n",
          "        } else {\n",
          "          peg$currPos = s3;\n",
          "          s3 = peg$FAILED;\n",
          "        }\n",
          "      }\n",
          "      s1 = [s1, s2];\n",
          "      s0 = s1;\n",
          "    } else {\n",
          "      peg$currPos = s0;\n",
          "      s0 = peg$FAILED;\n",
          "    }\n",
          "\n",
          "    return s0;\n",
          "  }\n",
          "\n",
          {
            "children": [
              "  function ",
              {
                "children": [
                  "peg$parsepluck"
                ],
                "sourceContents": {},
                "line": 13,
                "column": 0,
                "source": "grammar/peg.pegjs",
                "name": "pluck",
                "$$$isSourceNode$$$": true
              },
              {
                "children": [
                  "() {\n"
                ],
                "sourceContents": {},
                "line": 13,
                "column": 5,
                "source": "grammar/peg.pegjs",
                "name": null,
                "$$$isSourceNode$$$": true
              }
            ],
            "sourceContents": {},
            "line": null,
            "column": null,
            "source": "grammar/peg.pegjs",
            "name": null,
            "$$$isSourceNode$$$": true
          },
          "    var s0, s1, s2, s3;\n",
          "\n",
          "    s0 = peg$currPos;\n",
          "    if (input.charCodeAt(peg$currPos) === 64) {\n",
          "      s1 = peg$c3;\n",
          "      peg$currPos++;\n",
          "    } else {\n",
          "      s1 = peg$FAILED;\n",
          "      if (peg$silentFails === 0) { peg$fail(peg$e3); }\n",
          "    }\n",
          "    if (s1 === peg$FAILED) {\n",
          "      s1 = null;\n",
          "    }\n",
          "    s2 = peg$parse_();\n",
          "    s3 = peg$parselabel();\n",
          "    if (s3 !== peg$FAILED) {\n",
          "      s1 = [s1, s2, s3];\n",
          "      s0 = s1;\n",
          "    } else {\n",
          "      peg$currPos = s0;\n",
          "      s0 = peg$FAILED;\n",
          "    }\n",
          "\n",
          "    return s0;\n",
          "  }\n",
          "\n",
          {
            "children": [
              "  function ",
              {
                "children": [
                  "peg$parselabel"
                ],
                "sourceContents": {},
                "line": 16,
                "column": 0,
                "source": "grammar/peg.pegjs",
                "name": "label",
                "$$$isSourceNode$$$": true
              },
              {
                "children": [
                  "() {\n"
                ],
                "sourceContents": {},
                "line": 16,
                "column": 5,
                "source": "grammar/peg.pegjs",
                "name": null,
                "$$$isSourceNode$$$": true
              }
            ],
            "sourceContents": {},
            "line": null,
            "column": null,
            "source": "grammar/peg.pegjs",
            "name": null,
            "$$$isSourceNode$$$": true
          },
          "    var s0, s1, s2, s3, s4;\n",
          "\n",
          "    s0 = peg$currPos;\n",
          "    s1 = peg$currPos;\n",
          "    s2 = peg$parseidentifier();\n",
          "    if (s2 !== peg$FAILED) {\n",
          "      s3 = peg$parse_();\n",
          "      if (input.charCodeAt(peg$currPos) === 58) {\n",
          "        s4 = peg$c4;\n",
          "        peg$currPos++;\n",
          "      } else {\n",
          "        s4 = peg$FAILED;\n",
          "        if (peg$silentFails === 0) { peg$fail(peg$e4); }\n",
          "      }\n",
          "      if (s4 !== peg$FAILED) {\n",
          "        s2 = [s2, s3, s4];\n",
          "        s1 = s2;\n",
          "      } else {\n",
          "        peg$currPos = s1;\n",
          "        s1 = peg$FAILED;\n",
          "      }\n",
          "    } else {\n",
          "      peg$currPos = s1;\n",
          "      s1 = peg$FAILED;\n",
          "    }\n",
          "    if (s1 === peg$FAILED) {\n",
          "      s1 = null;\n",
          "    }\n",
          "    s2 = peg$parse_();\n",
          "    s3 = peg$parseexpression();\n",
          "    if (s3 !== peg$FAILED) {\n",
          "      s1 = [s1, s2, s3];\n",
          "      s0 = s1;\n",
          "    } else {\n",
          "      peg$currPos = s0;\n",
          "      s0 = peg$FAILED;\n",
          "    }\n",
          "\n",
          "    return s0;\n",
          "  }\n",
          "\n",
          {
            "children": [
              "  function ",
              {
                "children": [
                  "peg$parseexpression"
                ],
                "sourceContents": {},
                "line": 19,
                "column": 0,
                "source": "grammar/peg.pegjs",
                "name": "expression",
                "$$$isSourceNode$$$": true
              },
              {
                "children": [
                  "() {\n"
                ],
                "sourceContents": {},
                "line": 19,
                "column": 10,
                "source": "grammar/peg.pegjs",
                "name": null,
                "$$$isSourceNode$$$": true
              }
            ],
            "sourceContents": {},
            "line": null,
            "column": null,
            "source": "grammar/peg.pegjs",
            "name": null,
            "$$$isSourceNode$$$": true
          },
          "    var s0, s1, s2, s3, s4, s5;\n",
          "\n",
          "    s0 = peg$currPos;\n",
          "    if (input.charCodeAt(peg$currPos) === 36) {\n",
          "      s1 = peg$c5;\n",
          "      peg$currPos++;\n",
          "    } else {\n",
          "      s1 = peg$FAILED;\n",
          "      if (peg$silentFails === 0) { peg$fail(peg$e5); }\n",
          "    }\n",
          "    if (s1 === peg$FAILED) {\n",
          "      s1 = null;\n",
          "    }\n",
          "    s2 = peg$parse_();\n",
          "    s3 = peg$parseparsingExpression();\n",
          "    if (s3 !== peg$FAILED) {\n",
          "      s4 = peg$parse_();\n",
          "      s5 = peg$parsequantifier();\n",
          "      if (s5 === peg$FAILED) {\n",
          "        s5 = null;\n",
          "      }\n",
          "      s1 = [s1, s2, s3, s4, s5];\n",
          "      s0 = s1;\n",
          "    } else {\n",
          "      peg$currPos = s0;\n",
          "      s0 = peg$FAILED;\n",
          "    }\n",
          "\n",
          "    return s0;\n",
          "  }\n",
          "\n",
          {
            "children": [
              "  function ",
              {
                "children": [
                  "peg$parsequantifier"
                ],
                "sourceContents": {},
                "line": 22,
                "column": 0,
                "source": "grammar/peg.pegjs",
                "name": "quantifier",
                "$$$isSourceNode$$$": true
              },
              {
                "children": [
                  "() {\n"
                ],
                "sourceContents": {},
                "line": 22,
                "column": 10,
                "source": "grammar/peg.pegjs",
                "name": null,
                "$$$isSourceNode$$$": true
              }
            ],
            "sourceContents": {},
            "line": null,
            "column": null,
            "source": "grammar/peg.pegjs",
            "name": null,
            "$$$isSourceNode$$$": true
          },
          "    var s0, s1, s2, s3, s4, s5, s6, s7, s8, s9, s10, s11, s12, s13;\n",
          "\n",
          "    s0 = input.charAt(peg$currPos);\n",
          "    if (peg$r0.test(s0)) {\n",
          "      peg$currPos++;\n",
          "    } else {\n",
          "      s0 = peg$FAILED;\n",
          "      if (peg$silentFails === 0) { peg$fail(peg$e6); }\n",
          "    }\n",
          "    if (s0 === peg$FAILED) {\n",
          "      s0 = peg$currPos;\n",
          "      if (input.charCodeAt(peg$currPos) === 124) {\n",
          "        s1 = peg$c6;\n",
          "        peg$currPos++;\n",
          "      } else {\n",
          "        s1 = peg$FAILED;\n",
          "        if (peg$silentFails === 0) { peg$fail(peg$e7); }\n",
          "      }\n",
          "      if (s1 !== peg$FAILED) {\n",
          "        s2 = peg$parse_();\n",
          "        s3 = peg$parsenumber();\n",
          "        if (s3 === peg$FAILED) {\n",
          "          s3 = peg$parseidentifier();\n",
          "        }\n",
          "        if (s3 !== peg$FAILED) {\n",
          "          s4 = peg$parse_();\n",
          "          if (input.charCodeAt(peg$currPos) === 124) {\n",
          "            s5 = peg$c6;\n",
          "            peg$currPos++;\n",
          "          } else {\n",
          "            s5 = peg$FAILED;\n",
          "            if (peg$silentFails === 0) { peg$fail(peg$e7); }\n",
          "          }\n",
          "          if (s5 !== peg$FAILED) {\n",
          "            s1 = [s1, s2, s3, s4, s5];\n",
          "            s0 = s1;\n",
          "          } else {\n",
          "            peg$currPos = s0;\n",
          "            s0 = peg$FAILED;\n",
          "          }\n",
          "        } else {\n",
          "          peg$currPos = s0;\n",
          "          s0 = peg$FAILED;\n",
          "        }\n",
          "      } else {\n",
          "        peg$currPos = s0;\n",
          "        s0 = peg$FAILED;\n",
          "      }\n",
          "      if (s0 === peg$FAILED) {\n",
          "        s0 = peg$currPos;\n",
          "        if (input.charCodeAt(peg$currPos) === 124) {\n",
          "          s1 = peg$c6;\n",
          "          peg$currPos++;\n",
          "        } else {\n",
          "          s1 = peg$FAILED;\n",
          "          if (peg$silentFails === 0) { peg$fail(peg$e7); }\n",
          "        }\n",
          "        if (s1 !== peg$FAILED) {\n",
          "          s2 = peg$parse_();\n",
          "          s3 = peg$parsenumber();\n",
          "          if (s3 === peg$FAILED) {\n",
          "            s3 = peg$parseidentifier();\n",
          "          }\n",
          "          if (s3 === peg$FAILED) {\n",
          "            s3 = null;\n",
          "          }\n",
          "          s4 = peg$parse_();\n",
          "          if (input.substr(peg$currPos, 2) === peg$c7) {\n",
          "            s5 = peg$c7;\n",
          "            peg$currPos += 2;\n",
          "          } else {\n",
          "            s5 = peg$FAILED;\n",
          "            if (peg$silentFails === 0) { peg$fail(peg$e8); }\n",
          "          }\n",
          "          if (s5 !== peg$FAILED) {\n",
          "            s6 = peg$parse_();\n",
          "            s7 = peg$parsenumber();\n",
          "            if (s7 === peg$FAILED) {\n",
          "              s7 = peg$parseidentifier();\n",
          "            }\n",
          "            if (s7 === peg$FAILED) {\n",
          "              s7 = null;\n",
          "            }\n",
          "            s8 = peg$parse_();\n",
          "            if (input.charCodeAt(peg$currPos) === 124) {\n",
          "              s9 = peg$c6;\n",
          "              peg$currPos++;\n",
          "            } else {\n",
          "              s9 = peg$FAILED;\n",
          "              if (peg$silentFails === 0) { peg$fail(peg$e7); }\n",
          "            }\n",
          "            if (s9 !== peg$FAILED) {\n",
          "              s1 = [s1, s2, s3, s4, s5, s6, s7, s8, s9];\n",
          "              s0 = s1;\n",
          "            } else {\n",
          "              peg$currPos = s0;\n",
          "              s0 = peg$FAILED;\n",
          "            }\n",
          "          } else {\n",
          "            peg$currPos = s0;\n",
          "            s0 = peg$FAILED;\n",
          "          }\n",
          "        } else {\n",
          "          peg$currPos = s0;\n",
          "          s0 = peg$FAILED;\n",
          "        }\n",
          "        if (s0 === peg$FAILED) {\n",
          "          s0 = peg$currPos;\n",
          "          if (input.charCodeAt(peg$currPos) === 124) {\n",
          "            s1 = peg$c6;\n",
          "            peg$currPos++;\n",
          "          } else {\n",
          "            s1 = peg$FAILED;\n",
          "            if (peg$silentFails === 0) { peg$fail(peg$e7); }\n",
          "          }\n",
          "          if (s1 !== peg$FAILED) {\n",
          "            s2 = peg$parse_();\n",
          "            s3 = peg$parsenumber();\n",
          "            if (s3 === peg$FAILED) {\n",
          "              s3 = peg$parseidentifier();\n",
          "            }\n",
          "            if (s3 === peg$FAILED) {\n",
          "              s3 = null;\n",
          "            }\n",
          "            s4 = peg$parse_();\n",
          "            if (input.charCodeAt(peg$currPos) === 44) {\n",
          "              s5 = peg$c8;\n",
          "              peg$currPos++;\n",
          "            } else {\n",
          "              s5 = peg$FAILED;\n",
          "              if (peg$silentFails === 0) { peg$fail(peg$e9); }\n",
          "            }\n",
          "            if (s5 !== peg$FAILED) {\n",
          "              s6 = peg$parse_();\n",
          "              s7 = peg$parsechoice();\n",
          "              if (s7 !== peg$FAILED) {\n",
          "                s8 = peg$parse_();\n",
          "                if (input.charCodeAt(peg$currPos) === 124) {\n",
          "                  s9 = peg$c6;\n",
          "                  peg$currPos++;\n",
          "                } else {\n",
          "                  s9 = peg$FAILED;\n",
          "                  if (peg$silentFails === 0) { peg$fail(peg$e7); }\n",
          "                }\n",
          "                if (s9 !== peg$FAILED) {\n",
          "                  s1 = [s1, s2, s3, s4, s5, s6, s7, s8, s9];\n",
          "                  s0 = s1;\n",
          "                } else {\n",
          "                  peg$currPos = s0;\n",
          "                  s0 = peg$FAILED;\n",
          "                }\n",
          "              } else {\n",
          "                peg$currPos = s0;\n",
          "                s0 = peg$FAILED;\n",
          "              }\n",
          "            } else {\n",
          "              peg$currPos = s0;\n",
          "              s0 = peg$FAILED;\n",
          "            }\n",
          "          } else {\n",
          "            peg$currPos = s0;\n",
          "            s0 = peg$FAILED;\n",
          "          }\n",
          "          if (s0 === peg$FAILED) {\n",
          "            s0 = peg$currPos;\n",
          "            if (input.charCodeAt(peg$currPos) === 124) {\n",
          "              s1 = peg$c6;\n",
          "              peg$currPos++;\n",
          "            } else {\n",
          "              s1 = peg$FAILED;\n",
          "              if (peg$silentFails === 0) { peg$fail(peg$e7); }\n",
          "            }\n",
          "            if (s1 !== peg$FAILED) {\n",
          "              s2 = peg$parse_();\n",
          "              s3 = peg$parsenumber();\n",
          "              if (s3 === peg$FAILED) {\n",
          "                s3 = peg$parseidentifier();\n",
          "              }\n",
          "              if (s3 === peg$FAILED) {\n",
          "                s3 = null;\n",
          "              }\n",
          "              s4 = peg$parse_();\n",
          "              if (input.substr(peg$currPos, 2) === peg$c7) {\n",
          "                s5 = peg$c7;\n",
          "                peg$currPos += 2;\n",
          "              } else {\n",
          "                s5 = peg$FAILED;\n",
          "                if (peg$silentFails === 0) { peg$fail(peg$e8); }\n",
          "              }\n",
          "              if (s5 !== peg$FAILED) {\n",
          "                s6 = peg$parse_();\n",
          "                s7 = peg$parsenumber();\n",
          "                if (s7 === peg$FAILED) {\n",
          "                  s7 = peg$parseidentifier();\n",
          "                }\n",
          "                if (s7 === peg$FAILED) {\n",
          "                  s7 = null;\n",
          "                }\n",
          "                s8 = peg$parse_();\n",
          "                if (input.charCodeAt(peg$currPos) === 44) {\n",
          "                  s9 = peg$c8;\n",
          "                  peg$currPos++;\n",
          "                } else {\n",
          "                  s9 = peg$FAILED;\n",
          "                  if (peg$silentFails === 0) { peg$fail(peg$e9); }\n",
          "                }\n",
          "                if (s9 !== peg$FAILED) {\n",
          "                  s10 = peg$parse_();\n",
          "                  s11 = peg$parsechoice();\n",
          "                  if (s11 !== peg$FAILED) {\n",
          "                    s12 = peg$parse_();\n",
          "                    if (input.charCodeAt(peg$currPos) === 124) {\n",
          "                      s13 = peg$c6;\n",
          "                      peg$currPos++;\n",
          "                    } else {\n",
          "                      s13 = peg$FAILED;\n",
          "                      if (peg$silentFails === 0) { peg$fail(peg$e7); }\n",
          "                    }\n",
          "                    if (s13 !== peg$FAILED) {\n",
          "                      s1 = [s1, s2, s3, s4, s5, s6, s7, s8, s9, s10, s11, s12, s13];\n",
          "                      s0 = s1;\n",
          "                    } else {\n",
          "                      peg$currPos = s0;\n",
          "                      s0 = peg$FAILED;\n",
          "                    }\n",
          "                  } else {\n",
          "                    peg$currPos = s0;\n",
          "                    s0 = peg$FAILED;\n",
          "                  }\n",
          "                } else {\n",
          "                  peg$currPos = s0;\n",
          "                  s0 = peg$FAILED;\n",
          "                }\n",
          "              } else {\n",
          "                peg$currPos = s0;\n",
          "                s0 = peg$FAILED;\n",
          "              }\n",
          "            } else {\n",
          "              peg$currPos = s0;\n",
          "              s0 = peg$FAILED;\n",
          "            }\n",
          "          }\n",
          "        }\n",
          "      }\n",
          "    }\n",
          "\n",
          "    return s0;\n",
          "  }\n",
          "\n",
          {
            "children": [
              "  function ",
              {
                "children": [
                  "peg$parseparsingExpression"
                ],
                "sourceContents": {},
                "line": 29,
                "column": 0,
                "source": "grammar/peg.pegjs",
                "name": "parsingExpression",
                "$$$isSourceNode$$$": true
              },
              {
                "children": [
                  "() {\n"
                ],
                "sourceContents": {},
                "line": 29,
                "column": 17,
                "source": "grammar/peg.pegjs",
                "name": null,
                "$$$isSourceNode$$$": true
              }
            ],
            "sourceContents": {},
            "line": null,
            "column": null,
            "source": "grammar/peg.pegjs",
            "name": null,
            "$$$isSourceNode$$$": true
          },
          "    var s0, s1, s2;\n",
          "\n",
          "    s0 = peg$parseidentifier();\n",
          "    if (s0 === peg$FAILED) {\n",
          "      s0 = peg$currPos;\n",
          "      s1 = peg$parsestring();\n",
          "      if (s1 !== peg$FAILED) {\n",
          "        if (input.charCodeAt(peg$currPos) === 105) {\n",
          "          s2 = peg$c9;\n",
          "          peg$currPos++;\n",
          "        } else {\n",
          "          s2 = peg$FAILED;\n",
          "          if (peg$silentFails === 0) { peg$fail(peg$e10); }\n",
          "        }\n",
          "        if (s2 === peg$FAILED) {\n",
          "          s2 = null;\n",
          "        }\n",
          "        s1 = [s1, s2];\n",
          "        s0 = s1;\n",
          "      } else {\n",
          "        peg$currPos = s0;\n",
          "        s0 = peg$FAILED;\n",
          "      }\n",
          "      if (s0 === peg$FAILED) {\n",
          "        s0 = peg$currPos;\n",
          "        s1 = peg$parserange();\n",
          "        if (s1 !== peg$FAILED) {\n",
          "          if (input.charCodeAt(peg$currPos) === 105) {\n",
          "            s2 = peg$c9;\n",
          "            peg$currPos++;\n",
          "          } else {\n",
          "            s2 = peg$FAILED;\n",
          "            if (peg$silentFails === 0) { peg$fail(peg$e10); }\n",
          "          }\n",
          "          if (s2 === peg$FAILED) {\n",
          "            s2 = null;\n",
          "          }\n",
          "          s1 = [s1, s2];\n",
          "          s0 = s1;\n",
          "        } else {\n",
          "          peg$currPos = s0;\n",
          "          s0 = peg$FAILED;\n",
          "        }\n",
          "        if (s0 === peg$FAILED) {\n",
          "          s0 = peg$parsegroup();\n",
          "        }\n",
          "      }\n",
          "    }\n",
          "\n",
          "    return s0;\n",
          "  }\n",
          "\n",
          {
            "children": [
              "  function ",
              {
                "children": [
                  "peg$parsegroup"
                ],
                "sourceContents": {},
                "line": 35,
                "column": 0,
                "source": "grammar/peg.pegjs",
                "name": "group",
                "$$$isSourceNode$$$": true
              },
              {
                "children": [
                  "() {\n"
                ],
                "sourceContents": {},
                "line": 35,
                "column": 5,
                "source": "grammar/peg.pegjs",
                "name": null,
                "$$$isSourceNode$$$": true
              }
            ],
            "sourceContents": {},
            "line": null,
            "column": null,
            "source": "grammar/peg.pegjs",
            "name": null,
            "$$$isSourceNode$$$": true
          },
          "    var s0, s1, s2, s3, s4, s5;\n",
          "\n",
          "    s0 = peg$currPos;\n",
          "    if (input.charCodeAt(peg$currPos) === 40) {\n",
          "      s1 = peg$c10;\n",
          "      peg$currPos++;\n",
          "    } else {\n",
          "      s1 = peg$FAILED;\n",
          "      if (peg$silentFails === 0) { peg$fail(peg$e11); }\n",
          "    }\n",
          "    if (s1 !== peg$FAILED) {\n",
          "      s2 = peg$parse_();\n",
          "      s3 = peg$parsechoice();\n",
          "      if (s3 !== peg$FAILED) {\n",
          "        s4 = peg$parse_();\n",
          "        if (input.charCodeAt(peg$currPos) === 41) {\n",
          "          s5 = peg$c11;\n",
          "          peg$currPos++;\n",
          "        } else {\n",
          "          s5 = peg$FAILED;\n",
          "          if (peg$silentFails === 0) { peg$fail(peg$e12); }\n",
          "        }\n",
          "        if (s5 !== peg$FAILED) {\n",
          "          s1 = [s1, s2, s3, s4, s5];\n",
          "          s0 = s1;\n",
          "        } else {\n",
          "          peg$currPos = s0;\n",
          "          s0 = peg$FAILED;\n",
          "        }\n",
          "      } else {\n",
          "        peg$currPos = s0;\n",
          "        s0 = peg$FAILED;\n",
          "      }\n",
          "    } else {\n",
          "      peg$currPos = s0;\n",
          "      s0 = peg$FAILED;\n",
          "    }\n",
          "\n",
          "    return s0;\n",
          "  }\n",
          "\n",
          {
            "children": [
              "  function ",
              {
                "children": [
                  "peg$parsestring"
                ],
                "sourceContents": {},
                "line": 38,
                "column": 0,
                "source": "grammar/peg.pegjs",
                "name": "string",
                "$$$isSourceNode$$$": true
              },
              {
                "children": [
                  "() {\n"
                ],
                "sourceContents": {},
                "line": 38,
                "column": 6,
                "source": "grammar/peg.pegjs",
                "name": null,
                "$$$isSourceNode$$$": true
              }
            ],
            "sourceContents": {},
            "line": null,
            "column": null,
            "source": "grammar/peg.pegjs",
            "name": null,
            "$$$isSourceNode$$$": true
          },
          "    var s0, s1, s2, s3;\n",
          "\n",
          "    s0 = peg$currPos;\n",
          "    s1 = input.charAt(peg$currPos);\n",
          "    if (peg$r1.test(s1)) {\n",
          "      peg$currPos++;\n",
          "    } else {\n",
          "      s1 = peg$FAILED;\n",
          "      if (peg$silentFails === 0) { peg$fail(peg$e13); }\n",
          "    }\n",
          "    if (s1 !== peg$FAILED) {\n",
          "      s2 = [];\n",
          "      s3 = input.charAt(peg$currPos);\n",
          "      if (peg$r2.test(s3)) {\n",
          "        peg$currPos++;\n",
          "      } else {\n",
          "        s3 = peg$FAILED;\n",
          "        if (peg$silentFails === 0) { peg$fail(peg$e14); }\n",
          "      }\n",
          "      while (s3 !== peg$FAILED) {\n",
          "        s2.push(s3);\n",
          "        s3 = input.charAt(peg$currPos);\n",
          "        if (peg$r2.test(s3)) {\n",
          "          peg$currPos++;\n",
          "        } else {\n",
          "          s3 = peg$FAILED;\n",
          "          if (peg$silentFails === 0) { peg$fail(peg$e14); }\n",
          "        }\n",
          "      }\n",
          "      s3 = input.charAt(peg$currPos);\n",
          "      if (peg$r1.test(s3)) {\n",
          "        peg$currPos++;\n",
          "      } else {\n",
          "        s3 = peg$FAILED;\n",
          "        if (peg$silentFails === 0) { peg$fail(peg$e13); }\n",
          "      }\n",
          "      if (s3 !== peg$FAILED) {\n",
          "        s1 = [s1, s2, s3];\n",
          "        s0 = s1;\n",
          "      } else {\n",
          "        peg$currPos = s0;\n",
          "        s0 = peg$FAILED;\n",
          "      }\n",
          "    } else {\n",
          "      peg$currPos = s0;\n",
          "      s0 = peg$FAILED;\n",
          "    }\n",
          "    if (s0 === peg$FAILED) {\n",
          "      s0 = peg$currPos;\n",
          "      s1 = input.charAt(peg$currPos);\n",
          "      if (peg$r3.test(s1)) {\n",
          "        peg$currPos++;\n",
          "      } else {\n",
          "        s1 = peg$FAILED;\n",
          "        if (peg$silentFails === 0) { peg$fail(peg$e15); }\n",
          "      }\n",
          "      if (s1 !== peg$FAILED) {\n",
          "        s2 = [];\n",
          "        s3 = input.charAt(peg$currPos);\n",
          "        if (peg$r4.test(s3)) {\n",
          "          peg$currPos++;\n",
          "        } else {\n",
          "          s3 = peg$FAILED;\n",
          "          if (peg$silentFails === 0) { peg$fail(peg$e16); }\n",
          "        }\n",
          "        while (s3 !== peg$FAILED) {\n",
          "          s2.push(s3);\n",
          "          s3 = input.charAt(peg$currPos);\n",
          "          if (peg$r4.test(s3)) {\n",
          "            peg$currPos++;\n",
          "          } else {\n",
          "            s3 = peg$FAILED;\n",
          "            if (peg$silentFails === 0) { peg$fail(peg$e16); }\n",
          "          }\n",
          "        }\n",
          "        s3 = input.charAt(peg$currPos);\n",
          "        if (peg$r3.test(s3)) {\n",
          "          peg$currPos++;\n",
          "        } else {\n",
          "          s3 = peg$FAILED;\n",
          "          if (peg$silentFails === 0) { peg$fail(peg$e15); }\n",
          "        }\n",
          "        if (s3 !== peg$FAILED) {\n",
          "          s1 = [s1, s2, s3];\n",
          "          s0 = s1;\n",
          "        } else {\n",
          "          peg$currPos = s0;\n",
          "          s0 = peg$FAILED;\n",
          "        }\n",
          "      } else {\n",
          "        peg$currPos = s0;\n",
          "        s0 = peg$FAILED;\n",
          "      }\n",
          "    }\n",
          "\n",
          "    return s0;\n",
          "  }\n",
          "\n",
          {
            "children": [
              "  function ",
              {
                "children": [
                  "peg$parserange"
                ],
                "sourceContents": {},
                "line": 42,
                "column": 0,
                "source": "grammar/peg.pegjs",
                "name": "range",
                "$$$isSourceNode$$$": true
              },
              {
                "children": [
                  "() {\n"
                ],
                "sourceContents": {},
                "line": 42,
                "column": 5,
                "source": "grammar/peg.pegjs",
                "name": null,
                "$$$isSourceNode$$$": true
              }
            ],
            "sourceContents": {},
            "line": null,
            "column": null,
            "source": "grammar/peg.pegjs",
            "name": null,
            "$$$isSourceNode$$$": true
          },
          "    var s0, s1, s2, s3;\n",
          "\n",
          "    s0 = peg$currPos;\n",
          "    if (input.charCodeAt(peg$currPos) === 91) {\n",
          "      s1 = peg$c12;\n",
          "      peg$currPos++;\n",
          "    } else {\n",
          "      s1 = peg$FAILED;\n",
          "      if (peg$silentFails === 0) { peg$fail(peg$e17); }\n",
          "    }\n",
          "    if (s1 !== peg$FAILED) {\n",
          "      s2 = [];\n",
          "      s3 = peg$parseinput_range();\n",
          "      if (s3 !== peg$FAILED) {\n",
          "        while (s3 !== peg$FAILED) {\n",
          "          s2.push(s3);\n",
          "          s3 = peg$parseinput_range();\n",
          "        }\n",
          "      } else {\n",
          "        s2 = peg$FAILED;\n",
          "      }\n",
          "      if (s2 !== peg$FAILED) {\n",
          "        if (input.charCodeAt(peg$currPos) === 93) {\n",
          "          s3 = peg$c13;\n",
          "          peg$currPos++;\n",
          "        } else {\n",
          "          s3 = peg$FAILED;\n",
          "          if (peg$silentFails === 0) { peg$fail(peg$e18); }\n",
          "        }\n",
          "        if (s3 !== peg$FAILED) {\n",
          "          s1 = [s1, s2, s3];\n",
          "          s0 = s1;\n",
          "        } else {\n",
          "          peg$currPos = s0;\n",
          "          s0 = peg$FAILED;\n",
          "        }\n",
          "      } else {\n",
          "        peg$currPos = s0;\n",
          "        s0 = peg$FAILED;\n",
          "      }\n",
          "    } else {\n",
          "      peg$currPos = s0;\n",
          "      s0 = peg$FAILED;\n",
          "    }\n",
          "\n",
          "    return s0;\n",
          "  }\n",
          "\n",
          {
            "children": [
              "  function ",
              {
                "children": [
                  "peg$parseinput_range"
                ],
                "sourceContents": {},
                "line": 44,
                "column": 0,
                "source": "grammar/peg.pegjs",
                "name": "input_range",
                "$$$isSourceNode$$$": true
              },
              {
                "children": [
                  "() {\n"
                ],
                "sourceContents": {},
                "line": 44,
                "column": 11,
                "source": "grammar/peg.pegjs",
                "name": null,
                "$$$isSourceNode$$$": true
              }
            ],
            "sourceContents": {},
            "line": null,
            "column": null,
            "source": "grammar/peg.pegjs",
            "name": null,
            "$$$isSourceNode$$$": true
          },
          "    var s0, s1, s2, s3;\n",
          "\n",
          "    s0 = peg$currPos;\n",
          "    s1 = input.charAt(peg$currPos);\n",
          "    if (peg$r5.test(s1)) {\n",
          "      peg$currPos++;\n",
          "    } else {\n",
          "      s1 = peg$FAILED;\n",
          "      if (peg$silentFails === 0) { peg$fail(peg$e19); }\n",
          "    }\n",
          "    if (s1 !== peg$FAILED) {\n",
          "      if (input.charCodeAt(peg$currPos) === 45) {\n",
          "        s2 = peg$c14;\n",
          "        peg$currPos++;\n",
          "      } else {\n",
          "        s2 = peg$FAILED;\n",
          "        if (peg$silentFails === 0) { peg$fail(peg$e20); }\n",
          "      }\n",
          "      if (s2 !== peg$FAILED) {\n",
          "        s3 = input.charAt(peg$currPos);\n",
          "        if (peg$r5.test(s3)) {\n",
          "          peg$currPos++;\n",
          "        } else {\n",
          "          s3 = peg$FAILED;\n",
          "          if (peg$silentFails === 0) { peg$fail(peg$e19); }\n",
          "        }\n",
          "        if (s3 !== peg$FAILED) {\n",
          "          s1 = [s1, s2, s3];\n",
          "          s0 = s1;\n",
          "        } else {\n",
          "          peg$currPos = s0;\n",
          "          s0 = peg$FAILED;\n",
          "        }\n",
          "      } else {\n",
          "        peg$currPos = s0;\n",
          "        s0 = peg$FAILED;\n",
          "      }\n",
          "    } else {\n",
          "      peg$currPos = s0;\n",
          "      s0 = peg$FAILED;\n",
          "    }\n",
          "    if (s0 === peg$FAILED) {\n",
          "      s0 = [];\n",
          "      s1 = input.charAt(peg$currPos);\n",
          "      if (peg$r6.test(s1)) {\n",
          "        peg$currPos++;\n",
          "      } else {\n",
          "        s1 = peg$FAILED;\n",
          "        if (peg$silentFails === 0) { peg$fail(peg$e21); }\n",
          "      }\n",
          "      if (s1 !== peg$FAILED) {\n",
          "        while (s1 !== peg$FAILED) {\n",
          "          s0.push(s1);\n",
          "          s1 = input.charAt(peg$currPos);\n",
          "          if (peg$r6.test(s1)) {\n",
          "            peg$currPos++;\n",
          "          } else {\n",
          "            s1 = peg$FAILED;\n",
          "            if (peg$silentFails === 0) { peg$fail(peg$e21); }\n",
          "          }\n",
          "        }\n",
          "      } else {\n",
          "        s0 = peg$FAILED;\n",
          "      }\n",
          "    }\n",
          "\n",
          "    return s0;\n",
          "  }\n",
          "\n",
          {
            "children": [
              "  function ",
              {
                "children": [
                  "peg$parseidentifier"
                ],
                "sourceContents": {},
                "line": 47,
                "column": 0,
                "source": "grammar/peg.pegjs",
                "name": "identifier",
                "$$$isSourceNode$$$": true
              },
              {
                "children": [
                  "() {\n"
                ],
                "sourceContents": {},
                "line": 47,
                "column": 10,
                "source": "grammar/peg.pegjs",
                "name": null,
                "$$$isSourceNode$$$": true
              }
            ],
            "sourceContents": {},
            "line": null,
            "column": null,
            "source": "grammar/peg.pegjs",
            "name": null,
            "$$$isSourceNode$$$": true
          },
          "    var s0, s1, s2, s3;\n",
          "\n",
          "    peg$silentFails++;\n",
          "    s0 = peg$currPos;\n",
          "    s1 = input.charAt(peg$currPos);\n",
          "    if (peg$r7.test(s1)) {\n",
          "      peg$currPos++;\n",
          "    } else {\n",
          "      s1 = peg$FAILED;\n",
          "      if (peg$silentFails === 0) { peg$fail(peg$e23); }\n",
          "    }\n",
          "    if (s1 !== peg$FAILED) {\n",
          "      s2 = [];\n",
          "      s3 = input.charAt(peg$currPos);\n",
          "      if (peg$r8.test(s3)) {\n",
          "        peg$currPos++;\n",
          "      } else {\n",
          "        s3 = peg$FAILED;\n",
          "        if (peg$silentFails === 0) { peg$fail(peg$e24); }\n",
          "      }\n",
          "      while (s3 !== peg$FAILED) {\n",
          "        s2.push(s3);\n",
          "        s3 = input.charAt(peg$currPos);\n",
          "        if (peg$r8.test(s3)) {\n",
          "          peg$currPos++;\n",
          "        } else {\n",
          "          s3 = peg$FAILED;\n",
          "          if (peg$silentFails === 0) { peg$fail(peg$e24); }\n",
          "        }\n",
          "      }\n",
          "      s1 = [s1, s2];\n",
          "      s0 = s1;\n",
          "    } else {\n",
          "      peg$currPos = s0;\n",
          "      s0 = peg$FAILED;\n",
          "    }\n",
          "    peg$silentFails--;\n",
          "    if (s0 === peg$FAILED) {\n",
          "      s1 = peg$FAILED;\n",
          "      if (peg$silentFails === 0) { peg$fail(peg$e22); }\n",
          "    }\n",
          "\n",
          "    return s0;\n",
          "  }\n",
          "\n",
          {
            "children": [
              "  function ",
              {
                "children": [
                  "peg$parse_"
                ],
                "sourceContents": {},
                "line": 50,
                "column": 0,
                "source": "grammar/peg.pegjs",
                "name": "_",
                "$$$isSourceNode$$$": true
              },
              {
                "children": [
                  "() {\n"
                ],
                "sourceContents": {},
                "line": 50,
                "column": 1,
                "source": "grammar/peg.pegjs",
                "name": null,
                "$$$isSourceNode$$$": true
              }
            ],
            "sourceContents": {},
            "line": null,
            "column": null,
            "source": "grammar/peg.pegjs",
            "name": null,
            "$$$isSourceNode$$$": true
          },
          "    var s0, s1;\n",
          "\n",
          "    peg$silentFails++;\n",
          "    s0 = [];\n",
          "    s1 = input.charAt(peg$currPos);\n",
          "    if (peg$r9.test(s1)) {\n",
          "      peg$currPos++;\n",
          "    } else {\n",
          "      s1 = peg$FAILED;\n",
          "      if (peg$silentFails === 0) { peg$fail(peg$e26); }\n",
          "    }\n",
          "    while (s1 !== peg$FAILED) {\n",
          "      s0.push(s1);\n",
          "      s1 = input.charAt(peg$currPos);\n",
          "      if (peg$r9.test(s1)) {\n",
          "        peg$currPos++;\n",
          "      } else {\n",
          "        s1 = peg$FAILED;\n",
          "        if (peg$silentFails === 0) { peg$fail(peg$e26); }\n",
          "      }\n",
          "    }\n",
          "    peg$silentFails--;\n",
          "    s1 = peg$FAILED;\n",
          "    if (peg$silentFails === 0) { peg$fail(peg$e25); }\n",
          "\n",
          "    return s0;\n",
          "  }\n",
          "\n",
          {
            "children": [
              "  function ",
              {
                "children": [
                  "peg$parsenumber"
                ],
                "sourceContents": {},
                "line": 53,
                "column": 0,
                "source": "grammar/peg.pegjs",
                "name": "number",
                "$$$isSourceNode$$$": true
              },
              {
                "children": [
                  "() {\n"
                ],
                "sourceContents": {},
                "line": 53,
                "column": 6,
                "source": "grammar/peg.pegjs",
                "name": null,
                "$$$isSourceNode$$$": true
              }
            ],
            "sourceContents": {},
            "line": null,
            "column": null,
            "source": "grammar/peg.pegjs",
            "name": null,
            "$$$isSourceNode$$$": true
          },
          "    var s0, s1;\n",
          "\n",
          "    s0 = [];\n",
          "    s1 = input.charAt(peg$currPos);\n",
          "    if (peg$r10.test(s1)) {\n",
          "      peg$currPos++;\n",
          "    } else {\n",
          "      s1 = peg$FAILED;\n",
          "      if (peg$silentFails === 0) { peg$fail(peg$e27); }\n",
          "    }\n",
          "    if (s1 !== peg$FAILED) {\n",
          "      while (s1 !== peg$FAILED) {\n",
          "        s0.push(s1);\n",
          "        s1 = input.charAt(peg$currPos);\n",
          "        if (peg$r10.test(s1)) {\n",
          "          peg$currPos++;\n",
          "        } else {\n",
          "          s1 = peg$FAILED;\n",
          "          if (peg$silentFails === 0) { peg$fail(peg$e27); }\n",
          "        }\n",
          "      }\n",
          "    } else {\n",
          "      s0 = peg$FAILED;\n",
          "    }\n",
          "\n",
          "    return s0;\n",
          "  }\n",
          "\n",
          "  peg$result = peg$startRuleFunction();\n",
          "\n",
          "  if (options.peg$library) {\n",
          "    return /** @type {any} */ ({\n",
          "      peg$result,\n",
          "      peg$currPos,\n",
          "      peg$FAILED,\n",
          "      peg$maxFailExpected,\n",
          "      peg$maxFailPos\n",
          "    });\n",
          "  }\n",
          "  if (peg$result !== peg$FAILED && peg$currPos === input.length) {\n",
          "    return peg$result;\n",
          "  } else {\n",
          "    if (peg$result !== peg$FAILED && peg$currPos < input.length) {\n",
          "      peg$fail(peg$endExpectation());\n",
          "    }\n",
          "\n",
          "    throw peg$buildStructuredError(\n",
          "      peg$maxFailExpected,\n",
          "      peg$maxFailPos < input.length ? input.charAt(peg$maxFailPos) : null,\n",
          "      peg$maxFailPos < input.length\n",
          "        ? peg$computeLocation(peg$maxFailPos, peg$maxFailPos + 1)\n",
          "        : peg$computeLocation(peg$maxFailPos, peg$maxFailPos)\n",
          "    );\n",
          "  }\n",
          "}\n"
        ],
        "sourceContents": {},
        "line": null,
        "column": null,
        "source": "grammar/peg.pegjs",
        "name": null,
        "$$$isSourceNode$$$": true
      },
      "\n",
      "module.exports = {\n  StartRules: [\"grammar\"],\n  SyntaxError: peg$SyntaxError,\n  parse: peg$parse\n};\n"
    ],
    "sourceContents": {},
    "line": null,
    "column": null,
    "source": "grammar/peg.pegjs",
    "name": null,
    "$$$isSourceNode$$$": true
  }
}