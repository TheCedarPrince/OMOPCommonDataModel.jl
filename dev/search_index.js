var documenterSearchIndex = {"docs":
[{"location":"generate/","page":"Auto-Generation","title":"Auto-Generation","text":"CurrentModule = OMOPCommonDataModel","category":"page"},{"location":"generate/#Automatically-generating-the-structs","page":"Auto-Generation","title":"Automatically generating the structs","text":"","category":"section"},{"location":"generate/","page":"Auto-Generation","title":"Auto-Generation","text":"The struct definitions in OMOPCommonDataModel.jl are automatically generated.","category":"page"},{"location":"generate/","page":"Auto-Generation","title":"Auto-Generation","text":"Here is how they are generated:","category":"page"},{"location":"generate/","page":"Auto-Generation","title":"Auto-Generation","text":"julia> run(`git clone https://github.com/JuliaHealth/OMOPCommonDataModel.jl.git`)\n\njulia> cd(\"OMOPCommonDataModel.jl\")\n\njulia> using Pkg\n\njulia> Pkg.activate(pwd())\n\njulia> Pkg.instantiate()\n\njulia> cd(\"src\")\n\njulia> using OMOPCommonDataModel\n\njulia> OMOPCommonDataModel.Generate.generate() # this will write the generated struct definitions to `src/autogenerated.jl`","category":"page"},{"location":"generate/#Generate-API","page":"Auto-Generation","title":"Generate API","text":"","category":"section"},{"location":"generate/","page":"Auto-Generation","title":"Auto-Generation","text":"","category":"page"},{"location":"generate/","page":"Auto-Generation","title":"Auto-Generation","text":"Modules = [OMOPCommonDataModel.Generate]","category":"page"},{"location":"generate/#OMOPCommonDataModel.Generate.generate-Union{Tuple{}, Tuple{F}} where F","page":"Auto-Generation","title":"OMOPCommonDataModel.Generate.generate","text":"Generate the code for OMOPCommonDataModel from the DDL.\n\n\n\n\n\n","category":"method"},{"location":"generate/#OMOPCommonDataModel.Generate.pascalcase-Tuple{Any}","page":"Auto-Generation","title":"OMOPCommonDataModel.Generate.pascalcase","text":"Convert the input string to PascalCase.\n\n\n\n\n\n","category":"method"},{"location":"generate/#OMOPCommonDataModel.Generate.snakecase-Tuple{Any}","page":"Auto-Generation","title":"OMOPCommonDataModel.Generate.snakecase","text":"Convert the input string to snake_case.\n\n\n\n\n\n","category":"method"},{"location":"api/","page":"API","title":"API","text":"CurrentModule = OMOPCommonDataModel","category":"page"},{"location":"api/#API","page":"API","title":"API","text":"","category":"section"},{"location":"api/","page":"API","title":"API","text":"","category":"page"},{"location":"api/","page":"API","title":"API","text":"Modules = [OMOPCommonDataModel]","category":"page"},{"location":"api/#OMOPCommonDataModel.AttributeDefinition","page":"API","title":"OMOPCommonDataModel.AttributeDefinition","text":"CDM table name: ATTRIBUTE_DEFINITION\n\nJulia struct name: AttributeDefinition\n\nstruct AttributeDefinition <: CDMType\n\nattribute_definition_id::Int64\nattribute_name::String\nattribute_description::Union{Missing, String}\nattribute_type_concept_id::Int64\nattribute_syntax::Union{Missing, String}\n\n\n\n\n\n","category":"type"},{"location":"api/#OMOPCommonDataModel.CDMType","page":"API","title":"OMOPCommonDataModel.CDMType","text":"An OMOP Common Data Model (CDM) type.\n\n\n\n\n\n","category":"type"},{"location":"api/#OMOPCommonDataModel.CareSite","page":"API","title":"OMOPCommonDataModel.CareSite","text":"CDM table name: CARE_SITE\n\nJulia struct name: CareSite\n\nstruct CareSite <: CDMType\n\ncare_site_id::Int64\ncare_site_name::Union{Missing, String}\nplace_of_service_concept_id::Union{Missing, Int64}\nlocation_id::Union{Missing, Int64}\ncare_site_source_value::Union{Missing, String}\nplace_of_service_source_value::Union{Missing, String}\n\n\n\n\n\n","category":"type"},{"location":"api/#OMOPCommonDataModel.CdmSource","page":"API","title":"OMOPCommonDataModel.CdmSource","text":"CDM table name: CDM_SOURCE\n\nJulia struct name: CdmSource\n\nstruct CdmSource <: CDMType\n\ncdm_source_name::String\ncdm_source_abbreviation::Union{Missing, String}\ncdm_holder::Union{Missing, String}\nsource_description::Union{Missing, String}\nsource_documentation_reference::Union{Missing, String}\ncdm_etl_reference::Union{Missing, String}\nsource_release_date::Union{Missing, Dates.DateTime}\ncdm_release_date::Union{Missing, Dates.DateTime}\ncdm_version::Union{Missing, String}\nvocabulary_version::Union{Missing, String}\n\n\n\n\n\n","category":"type"},{"location":"api/#OMOPCommonDataModel.Cohort","page":"API","title":"OMOPCommonDataModel.Cohort","text":"CDM table name: COHORT\n\nJulia struct name: Cohort\n\nstruct Cohort <: CDMType\n\ncohort_definition_id::Int64\nsubject_id::Int64\ncohort_start_date::Dates.DateTime\ncohort_end_date::Dates.DateTime\n\n\n\n\n\n","category":"type"},{"location":"api/#OMOPCommonDataModel.CohortAttribute","page":"API","title":"OMOPCommonDataModel.CohortAttribute","text":"CDM table name: COHORT_ATTRIBUTE\n\nJulia struct name: CohortAttribute\n\nstruct CohortAttribute <: CDMType\n\ncohort_definition_id::Int64\nsubject_id::Int64\ncohort_start_date::Dates.DateTime\ncohort_end_date::Dates.DateTime\nattribute_definition_id::Int64\nvalue_as_number::Union{Missing, Float64}\nvalue_as_concept_id::Union{Missing, Int64}\n\n\n\n\n\n","category":"type"},{"location":"api/#OMOPCommonDataModel.CohortDefinition","page":"API","title":"OMOPCommonDataModel.CohortDefinition","text":"CDM table name: COHORT_DEFINITION\n\nJulia struct name: CohortDefinition\n\nstruct CohortDefinition <: CDMType\n\ncohort_definition_id::Int64\ncohort_definition_name::String\ncohort_definition_description::Union{Missing, String}\ndefinition_type_concept_id::Int64\ncohort_definition_syntax::Union{Missing, String}\nsubject_concept_id::Int64\ncohort_initiation_date::Union{Missing, Dates.DateTime}\n\n\n\n\n\n","category":"type"},{"location":"api/#OMOPCommonDataModel.Concept","page":"API","title":"OMOPCommonDataModel.Concept","text":"CDM table name: CONCEPT\n\nJulia struct name: Concept\n\nstruct Concept <: CDMType\n\nconcept_id::Int64\nconcept_name::String\ndomain_id::String\nvocabulary_id::String\nconcept_class_id::String\nstandard_concept::Union{Missing, String}\nconcept_code::String\nvalid_start_date::Dates.DateTime\nvalid_end_date::Dates.DateTime\ninvalid_reason::Union{Missing, String}\n\n\n\n\n\n","category":"type"},{"location":"api/#OMOPCommonDataModel.ConceptAncestor","page":"API","title":"OMOPCommonDataModel.ConceptAncestor","text":"CDM table name: CONCEPT_ANCESTOR\n\nJulia struct name: ConceptAncestor\n\nstruct ConceptAncestor <: CDMType\n\nancestor_concept_id::Int64\ndescendant_concept_id::Int64\nmin_levels_of_separation::Int64\nmax_levels_of_separation::Int64\n\n\n\n\n\n","category":"type"},{"location":"api/#OMOPCommonDataModel.ConceptClass","page":"API","title":"OMOPCommonDataModel.ConceptClass","text":"CDM table name: CONCEPT_CLASS\n\nJulia struct name: ConceptClass\n\nstruct ConceptClass <: CDMType\n\nconcept_class_id::String\nconcept_class_name::String\nconcept_class_concept_id::Int64\n\n\n\n\n\n","category":"type"},{"location":"api/#OMOPCommonDataModel.ConceptRelationship","page":"API","title":"OMOPCommonDataModel.ConceptRelationship","text":"CDM table name: CONCEPT_RELATIONSHIP\n\nJulia struct name: ConceptRelationship\n\nstruct ConceptRelationship <: CDMType\n\nconcept_id_1::Int64\nconcept_id_2::Int64\nrelationship_id::String\nvalid_start_date::Dates.DateTime\nvalid_end_date::Dates.DateTime\ninvalid_reason::Union{Missing, String}\n\n\n\n\n\n","category":"type"},{"location":"api/#OMOPCommonDataModel.ConceptSynonym","page":"API","title":"OMOPCommonDataModel.ConceptSynonym","text":"CDM table name: CONCEPT_SYNONYM\n\nJulia struct name: ConceptSynonym\n\nstruct ConceptSynonym <: CDMType\n\nconcept_id::Int64\nconcept_synonym_name::String\nlanguage_concept_id::Int64\n\n\n\n\n\n","category":"type"},{"location":"api/#OMOPCommonDataModel.ConditionEra","page":"API","title":"OMOPCommonDataModel.ConditionEra","text":"CDM table name: CONDITION_ERA\n\nJulia struct name: ConditionEra\n\nstruct ConditionEra <: CDMType\n\ncondition_era_id::Int64\nperson_id::Int64\ncondition_concept_id::Int64\ncondition_era_start_date::Dates.DateTime\ncondition_era_end_date::Dates.DateTime\ncondition_occurrence_count::Union{Missing, Int64}\n\n\n\n\n\n","category":"type"},{"location":"api/#OMOPCommonDataModel.ConditionOccurrence","page":"API","title":"OMOPCommonDataModel.ConditionOccurrence","text":"CDM table name: CONDITION_OCCURRENCE\n\nJulia struct name: ConditionOccurrence\n\nstruct ConditionOccurrence <: CDMType\n\ncondition_occurrence_id::Int64\nperson_id::Int64\ncondition_concept_id::Int64\ncondition_start_date::Dates.DateTime\ncondition_start_datetime::Union{Missing, Dates.DateTime}\ncondition_end_date::Union{Missing, Dates.DateTime}\ncondition_end_datetime::Union{Missing, Dates.DateTime}\ncondition_type_concept_id::Int64\nstop_reason::Union{Missing, String}\nprovider_id::Union{Missing, Int64}\nvisit_occurrence_id::Union{Missing, Int64}\nvisit_detail_id::Union{Missing, Int64}\ncondition_source_value::Union{Missing, String}\ncondition_source_concept_id::Union{Missing, Int64}\ncondition_status_source_value::Union{Missing, String}\ncondition_status_concept_id::Union{Missing, Int64}\n\n\n\n\n\n","category":"type"},{"location":"api/#OMOPCommonDataModel.Cost","page":"API","title":"OMOPCommonDataModel.Cost","text":"CDM table name: COST\n\nJulia struct name: Cost\n\nstruct Cost <: CDMType\n\ncost_id::Int64\ncost_event_id::Int64\ncost_domain_id::String\ncost_type_concept_id::Int64\ncurrency_concept_id::Union{Missing, Int64}\ntotal_charge::Union{Missing, Float64}\ntotal_cost::Union{Missing, Float64}\ntotal_paid::Union{Missing, Float64}\npaid_by_payer::Union{Missing, Float64}\npaid_by_patient::Union{Missing, Float64}\npaid_patient_copay::Union{Missing, Float64}\npaid_patient_coinsurance::Union{Missing, Float64}\npaid_patient_deductible::Union{Missing, Float64}\npaid_by_primary::Union{Missing, Float64}\npaid_ingredient_cost::Union{Missing, Float64}\npaid_dispensing_fee::Union{Missing, Float64}\npayer_plan_period_id::Union{Missing, Int64}\namount_allowed::Union{Missing, Float64}\nrevenue_code_concept_id::Union{Missing, Int64}\nreveue_code_source_value::Union{Missing, String}\ndrg_concept_id::Union{Missing, Int64}\ndrg_source_value::Union{Missing, String}\n\n\n\n\n\n","category":"type"},{"location":"api/#OMOPCommonDataModel.Death","page":"API","title":"OMOPCommonDataModel.Death","text":"CDM table name: DEATH\n\nJulia struct name: Death\n\nstruct Death <: CDMType\n\nperson_id::Int64\ndeath_date::Dates.DateTime\ndeath_datetime::Union{Missing, Dates.DateTime}\ndeath_type_concept_id::Int64\ncause_concept_id::Union{Missing, Int64}\ncause_source_value::Union{Missing, String}\ncause_source_concept_id::Union{Missing, Int64}\n\n\n\n\n\n","category":"type"},{"location":"api/#OMOPCommonDataModel.DeviceExposure","page":"API","title":"OMOPCommonDataModel.DeviceExposure","text":"CDM table name: DEVICE_EXPOSURE\n\nJulia struct name: DeviceExposure\n\nstruct DeviceExposure <: CDMType\n\ndevice_exposure_id::Int64\nperson_id::Int64\ndevice_concept_id::Int64\ndevice_exposure_start_date::Dates.DateTime\ndevice_exposure_start_datetime::Union{Missing, Dates.DateTime}\ndevice_exposure_end_date::Union{Missing, Dates.DateTime}\ndevice_exposure_end_datetime::Union{Missing, Dates.DateTime}\ndevice_type_concept_id::Int64\nunique_device_id::Union{Missing, String}\nquantity::Union{Missing, Int64}\nprovider_id::Union{Missing, Int64}\nvisit_occurrence_id::Union{Missing, Int64}\nvisit_detail_id::Union{Missing, Int64}\ndevice_source_value::Union{Missing, String}\ndevice_source_concept_id::Union{Missing, Int64}\n\n\n\n\n\n","category":"type"},{"location":"api/#OMOPCommonDataModel.Domain","page":"API","title":"OMOPCommonDataModel.Domain","text":"CDM table name: DOMAIN\n\nJulia struct name: Domain\n\nstruct Domain <: CDMType\n\ndomain_id::String\ndomain_name::String\ndomain_concept_id::Int64\n\n\n\n\n\n","category":"type"},{"location":"api/#OMOPCommonDataModel.DoseEra","page":"API","title":"OMOPCommonDataModel.DoseEra","text":"CDM table name: DOSE_ERA\n\nJulia struct name: DoseEra\n\nstruct DoseEra <: CDMType\n\ndose_era_id::Int64\nperson_id::Int64\ndrug_concept_id::Int64\nunit_concept_id::Int64\ndose_value::Float64\ndose_era_start_date::Dates.DateTime\ndose_era_end_date::Dates.DateTime\n\n\n\n\n\n","category":"type"},{"location":"api/#OMOPCommonDataModel.DrugEra","page":"API","title":"OMOPCommonDataModel.DrugEra","text":"CDM table name: DRUG_ERA\n\nJulia struct name: DrugEra\n\nstruct DrugEra <: CDMType\n\ndrug_era_id::Int64\nperson_id::Int64\ndrug_concept_id::Int64\ndrug_era_start_date::Dates.DateTime\ndrug_era_end_date::Dates.DateTime\ndrug_exposure_count::Union{Missing, Int64}\ngap_days::Union{Missing, Int64}\n\n\n\n\n\n","category":"type"},{"location":"api/#OMOPCommonDataModel.DrugExposure","page":"API","title":"OMOPCommonDataModel.DrugExposure","text":"CDM table name: DRUG_EXPOSURE\n\nJulia struct name: DrugExposure\n\nstruct DrugExposure <: CDMType\n\ndrug_exposure_id::Int64\nperson_id::Int64\ndrug_concept_id::Int64\ndrug_exposure_start_date::Dates.DateTime\ndrug_exposure_start_datetime::Union{Missing, Dates.DateTime}\ndrug_exposure_end_date::Dates.DateTime\ndrug_exposure_end_datetime::Union{Missing, Dates.DateTime}\nverbatim_end_date::Union{Missing, Dates.DateTime}\ndrug_type_concept_id::Int64\nstop_reason::Union{Missing, String}\nrefills::Union{Missing, Int64}\nquantity::Union{Missing, Float64}\ndays_supply::Union{Missing, Int64}\nsig::Union{Missing, String}\nroute_concept_id::Union{Missing, Int64}\nlot_number::Union{Missing, String}\nprovider_id::Union{Missing, Int64}\nvisit_occurrence_id::Union{Missing, Int64}\nvisit_detail_id::Union{Missing, Int64}\ndrug_source_value::Union{Missing, String}\ndrug_source_concept_id::Union{Missing, Int64}\nroute_source_value::Union{Missing, String}\ndose_unit_source_value::Union{Missing, String}\n\n\n\n\n\n","category":"type"},{"location":"api/#OMOPCommonDataModel.DrugStrength","page":"API","title":"OMOPCommonDataModel.DrugStrength","text":"CDM table name: DRUG_STRENGTH\n\nJulia struct name: DrugStrength\n\nstruct DrugStrength <: CDMType\n\ndrug_concept_id::Int64\ningredient_concept_id::Int64\namount_value::Union{Missing, Float64}\namount_unit_concept_id::Union{Missing, Int64}\nnumerator_value::Union{Missing, Float64}\nnumerator_unit_concept_id::Union{Missing, Int64}\ndenominator_value::Union{Missing, Float64}\ndenominator_unit_concept_id::Union{Missing, Int64}\nbox_size::Union{Missing, Int64}\nvalid_start_date::Dates.DateTime\nvalid_end_date::Dates.DateTime\ninvalid_reason::Union{Missing, String}\n\n\n\n\n\n","category":"type"},{"location":"api/#OMOPCommonDataModel.FactRelationship","page":"API","title":"OMOPCommonDataModel.FactRelationship","text":"CDM table name: FACT_RELATIONSHIP\n\nJulia struct name: FactRelationship\n\nstruct FactRelationship <: CDMType\n\ndomain_concept_id_1::Int64\nfact_id_1::Int64\ndomain_concept_id_2::Int64\nfact_id_2::Int64\nrelationship_concept_id::Int64\n\n\n\n\n\n","category":"type"},{"location":"api/#OMOPCommonDataModel.Location","page":"API","title":"OMOPCommonDataModel.Location","text":"CDM table name: LOCATION\n\nJulia struct name: Location\n\nstruct Location <: CDMType\n\nlocation_id::Int64\naddress_1::Union{Missing, String}\naddress_2::Union{Missing, String}\ncity::Union{Missing, String}\nstate::Union{Missing, String}\nzip::Union{Missing, String}\ncounty::Union{Missing, String}\nlocation_source_value::Union{Missing, String}\n\n\n\n\n\n","category":"type"},{"location":"api/#OMOPCommonDataModel.Measurement","page":"API","title":"OMOPCommonDataModel.Measurement","text":"CDM table name: MEASUREMENT\n\nJulia struct name: Measurement\n\nstruct Measurement <: CDMType\n\nmeasurement_id::Int64\nperson_id::Int64\nmeasurement_concept_id::Int64\nmeasurement_date::Dates.DateTime\nmeasurement_datetime::Union{Missing, Dates.DateTime}\nmeasurement_time::Union{Missing, String}\nmeasurement_type_concept_id::Int64\noperator_concept_id::Union{Missing, Int64}\nvalue_as_number::Union{Missing, Float64}\nvalue_as_concept_id::Union{Missing, Int64}\nunit_concept_id::Union{Missing, Int64}\nrange_low::Union{Missing, Float64}\nrange_high::Union{Missing, Float64}\nprovider_id::Union{Missing, Int64}\nvisit_occurrence_id::Union{Missing, Int64}\nvisit_detail_id::Union{Missing, Int64}\nmeasurement_source_value::Union{Missing, String}\nmeasurement_source_concept_id::Union{Missing, Int64}\nunit_source_value::Union{Missing, String}\nvalue_source_value::Union{Missing, String}\n\n\n\n\n\n","category":"type"},{"location":"api/#OMOPCommonDataModel.Metadata","page":"API","title":"OMOPCommonDataModel.Metadata","text":"CDM table name: METADATA\n\nJulia struct name: Metadata\n\nstruct Metadata <: CDMType\n\nmetadata_concept_id::Int64\nmetadata_type_concept_id::Int64\nname::String\nvalue_as_string::Union{Missing, String}\nvalue_as_concept_id::Union{Missing, Int64}\nmetadata_date::Union{Missing, Dates.DateTime}\nmetadata_datetime::Union{Missing, Dates.DateTime}\n\n\n\n\n\n","category":"type"},{"location":"api/#OMOPCommonDataModel.Note","page":"API","title":"OMOPCommonDataModel.Note","text":"CDM table name: NOTE\n\nJulia struct name: Note\n\nstruct Note <: CDMType\n\nnote_id::Int64\nperson_id::Int64\nnote_date::Dates.DateTime\nnote_datetime::Union{Missing, Dates.DateTime}\nnote_type_concept_id::Int64\nnote_class_concept_id::Int64\nnote_title::Union{Missing, String}\nnote_text::Union{Missing, String}\nencoding_concept_id::Int64\nlanguage_concept_id::Int64\nprovider_id::Union{Missing, Int64}\nvisit_occurrence_id::Union{Missing, Int64}\nvisit_detail_id::Union{Missing, Int64}\nnote_source_value::Union{Missing, String}\n\n\n\n\n\n","category":"type"},{"location":"api/#OMOPCommonDataModel.NoteNlp","page":"API","title":"OMOPCommonDataModel.NoteNlp","text":"CDM table name: NOTE_NLP\n\nJulia struct name: NoteNlp\n\nstruct NoteNlp <: CDMType\n\nnote_nlp_id::Int64\nnote_id::Int64\nsection_concept_id::Union{Missing, Int64}\nsnippet::Union{Missing, String}\noffset::Union{Missing, String}\nlexical_variant::String\nnote_nlp_concept_id::Union{Missing, Int64}\nnote_nlp_source_concept_id::Union{Missing, Int64}\nnlp_system::Union{Missing, String}\nnlp_date::Dates.DateTime\nnlp_datetime::Union{Missing, Dates.DateTime}\nterm_exists::Union{Missing, String}\nterm_temporal::Union{Missing, String}\nterm_modifiers::Union{Missing, String}\n\n\n\n\n\n","category":"type"},{"location":"api/#OMOPCommonDataModel.Observation","page":"API","title":"OMOPCommonDataModel.Observation","text":"CDM table name: OBSERVATION\n\nJulia struct name: Observation\n\nstruct Observation <: CDMType\n\nobservation_id::Int64\nperson_id::Int64\nobservation_concept_id::Int64\nobservation_date::Dates.DateTime\nobservation_datetime::Union{Missing, Dates.DateTime}\nobservation_type_concept_id::Int64\nvalue_as_number::Union{Missing, Float64}\nvalue_as_string::Union{Missing, String}\nvalue_as_concept_id::Union{Missing, Int64}\nqualifier_concept_id::Union{Missing, Int64}\nunit_concept_id::Union{Missing, Int64}\nprovider_id::Union{Missing, Int64}\nvisit_occurrence_id::Union{Missing, Int64}\nvisit_detail_id::Union{Missing, Int64}\nobservation_source_value::Union{Missing, String}\nobservation_source_concept_id::Union{Missing, Int64}\nunit_source_value::Union{Missing, String}\nqualifier_source_value::Union{Missing, String}\n\n\n\n\n\n","category":"type"},{"location":"api/#OMOPCommonDataModel.ObservationPeriod","page":"API","title":"OMOPCommonDataModel.ObservationPeriod","text":"CDM table name: OBSERVATION_PERIOD\n\nJulia struct name: ObservationPeriod\n\nstruct ObservationPeriod <: CDMType\n\nobservation_period_id::Int64\nperson_id::Int64\nobservation_period_start_date::Dates.DateTime\nobservation_period_end_date::Dates.DateTime\nperiod_type_concept_id::Int64\n\n\n\n\n\n","category":"type"},{"location":"api/#OMOPCommonDataModel.PayerPlanPeriod","page":"API","title":"OMOPCommonDataModel.PayerPlanPeriod","text":"CDM table name: PAYERPLANPERIOD\n\nJulia struct name: PayerPlanPeriod\n\nstruct PayerPlanPeriod <: CDMType\n\npayer_plan_period_id::Int64\nperson_id::Int64\npayer_plan_period_start_date::Dates.DateTime\npayer_plan_period_end_date::Dates.DateTime\npayer_concept_id::Union{Missing, Int64}\npayer_source_value::Union{Missing, String}\npayer_source_concept_id::Union{Missing, Int64}\nplan_concept_id::Union{Missing, Int64}\nplan_source_value::Union{Missing, String}\nplan_source_concept_id::Union{Missing, Int64}\nsponsor_concept_id::Union{Missing, Int64}\nsponsor_source_value::Union{Missing, String}\nsponsor_source_concept_id::Union{Missing, Int64}\nfamily_source_value::Union{Missing, String}\nstop_reason_concept_id::Union{Missing, Int64}\nstop_reason_source_value::Union{Missing, String}\nstop_reason_source_concept_id::Union{Missing, Int64}\n\n\n\n\n\n","category":"type"},{"location":"api/#OMOPCommonDataModel.Person","page":"API","title":"OMOPCommonDataModel.Person","text":"CDM table name: PERSON\n\nJulia struct name: Person\n\nstruct Person <: CDMType\n\nperson_id::Int64\ngender_concept_id::Int64\nyear_of_birth::Int64\nmonth_of_birth::Union{Missing, Int64}\nday_of_birth::Union{Missing, Int64}\nbirth_datetime::Union{Missing, Dates.DateTime}\nrace_concept_id::Int64\nethnicity_concept_id::Int64\nlocation_id::Union{Missing, Int64}\nprovider_id::Union{Missing, Int64}\ncare_site_id::Union{Missing, Int64}\nperson_source_value::Union{Missing, String}\ngender_source_value::Union{Missing, String}\ngender_source_concept_id::Union{Missing, Int64}\nrace_source_value::Union{Missing, String}\nrace_source_concept_id::Union{Missing, Int64}\nethnicity_source_value::Union{Missing, String}\nethnicity_source_concept_id::Union{Missing, Int64}\n\n\n\n\n\n","category":"type"},{"location":"api/#OMOPCommonDataModel.ProcedureOccurrence","page":"API","title":"OMOPCommonDataModel.ProcedureOccurrence","text":"CDM table name: PROCEDURE_OCCURRENCE\n\nJulia struct name: ProcedureOccurrence\n\nstruct ProcedureOccurrence <: CDMType\n\nprocedure_occurrence_id::Int64\nperson_id::Int64\nprocedure_concept_id::Int64\nprocedure_date::Dates.DateTime\nprocedure_datetime::Union{Missing, Dates.DateTime}\nprocedure_type_concept_id::Int64\nmodifier_concept_id::Union{Missing, Int64}\nquantity::Union{Missing, Int64}\nprovider_id::Union{Missing, Int64}\nvisit_occurrence_id::Union{Missing, Int64}\nvisit_detail_id::Union{Missing, Int64}\nprocedure_source_value::Union{Missing, String}\nprocedure_source_concept_id::Union{Missing, Int64}\nmodifier_source_value::Union{Missing, String}\n\n\n\n\n\n","category":"type"},{"location":"api/#OMOPCommonDataModel.Provider","page":"API","title":"OMOPCommonDataModel.Provider","text":"CDM table name: PROVIDER\n\nJulia struct name: Provider\n\nstruct Provider <: CDMType\n\nprovider_id::Int64\nprovider_name::Union{Missing, String}\nNPI::Union{Missing, String}\nDEA::Union{Missing, String}\nspecialty_concept_id::Union{Missing, Int64}\ncare_site_id::Union{Missing, Int64}\nyear_of_birth::Union{Missing, Int64}\ngender_concept_id::Union{Missing, Int64}\nprovider_source_value::Union{Missing, String}\nspecialty_source_value::Union{Missing, String}\nspecialty_source_concept_id::Union{Missing, Int64}\ngender_source_value::Union{Missing, String}\ngender_source_concept_id::Union{Missing, Int64}\n\n\n\n\n\n","category":"type"},{"location":"api/#OMOPCommonDataModel.Relationship","page":"API","title":"OMOPCommonDataModel.Relationship","text":"CDM table name: RELATIONSHIP\n\nJulia struct name: Relationship\n\nstruct Relationship <: CDMType\n\nrelationship_id::String\nrelationship_name::String\nis_hierarchical::String\ndefines_ancestry::String\nreverse_relationship_id::String\nrelationship_concept_id::Int64\n\n\n\n\n\n","category":"type"},{"location":"api/#OMOPCommonDataModel.SourceToConceptMap","page":"API","title":"OMOPCommonDataModel.SourceToConceptMap","text":"CDM table name: SOURCETOCONCEPT_MAP\n\nJulia struct name: SourceToConceptMap\n\nstruct SourceToConceptMap <: CDMType\n\nsource_code::String\nsource_concept_id::Int64\nsource_vocabulary_id::String\nsource_code_description::Union{Missing, String}\ntarget_concept_id::Int64\ntarget_vocabulary_id::String\nvalid_start_date::Dates.DateTime\nvalid_end_date::Dates.DateTime\ninvalid_reason::Union{Missing, String}\n\n\n\n\n\n","category":"type"},{"location":"api/#OMOPCommonDataModel.Specimen","page":"API","title":"OMOPCommonDataModel.Specimen","text":"CDM table name: SPECIMEN\n\nJulia struct name: Specimen\n\nstruct Specimen <: CDMType\n\nspecimen_id::Int64\nperson_id::Int64\nspecimen_concept_id::Int64\nspecimen_type_concept_id::Int64\nspecimen_date::Dates.DateTime\nspecimen_datetime::Union{Missing, Dates.DateTime}\nquantity::Union{Missing, Float64}\nunit_concept_id::Union{Missing, Int64}\nanatomic_site_concept_id::Union{Missing, Int64}\ndisease_status_concept_id::Union{Missing, Int64}\nspecimen_source_id::Union{Missing, String}\nspecimen_source_value::Union{Missing, String}\nunit_source_value::Union{Missing, String}\nanatomic_site_source_value::Union{Missing, String}\ndisease_status_source_value::Union{Missing, String}\n\n\n\n\n\n","category":"type"},{"location":"api/#OMOPCommonDataModel.VisitDetail","page":"API","title":"OMOPCommonDataModel.VisitDetail","text":"CDM table name: VISIT_DETAIL\n\nJulia struct name: VisitDetail\n\nstruct VisitDetail <: CDMType\n\nvisit_detail_id::Int64\nperson_id::Int64\nvisit_detail_concept_id::Int64\nvisit_detail_start_date::Dates.DateTime\nvisit_detail_start_datetime::Union{Missing, Dates.DateTime}\nvisit_detail_end_date::Dates.DateTime\nvisit_detail_end_datetime::Union{Missing, Dates.DateTime}\nvisit_detail_type_concept_id::Int64\nprovider_id::Union{Missing, Int64}\ncare_site_id::Union{Missing, Int64}\nadmitting_source_concept_id::Union{Missing, Int64}\ndischarge_to_concept_id::Union{Missing, Int64}\npreceding_visit_detail_id::Union{Missing, Int64}\nvisit_detail_source_value::Union{Missing, String}\nvisit_detail_source_concept_id::Union{Missing, Int64}\nadmitting_source_value::Union{Missing, String}\ndischarge_to_source_value::Union{Missing, String}\nvisit_detail_parent_id::Union{Missing, Int64}\nvisit_occurrence_id::Int64\n\n\n\n\n\n","category":"type"},{"location":"api/#OMOPCommonDataModel.VisitOccurrence","page":"API","title":"OMOPCommonDataModel.VisitOccurrence","text":"CDM table name: VISIT_OCCURRENCE\n\nJulia struct name: VisitOccurrence\n\nstruct VisitOccurrence <: CDMType\n\nvisit_occurrence_id::Int64\nperson_id::Int64\nvisit_concept_id::Int64\nvisit_start_date::Dates.DateTime\nvisit_start_datetime::Union{Missing, Dates.DateTime}\nvisit_end_date::Dates.DateTime\nvisit_end_datetime::Union{Missing, Dates.DateTime}\nvisit_type_concept_id::Int64\nprovider_id::Union{Missing, Int64}\ncare_site_id::Union{Missing, Int64}\nvisit_source_value::Union{Missing, String}\nvisit_source_concept_id::Union{Missing, Int64}\nadmitting_source_concept_id::Union{Missing, Int64}\nadmitting_source_value::Union{Missing, String}\ndischarge_to_concept_id::Union{Missing, Int64}\ndischarge_to_source_value::Union{Missing, String}\npreceding_visit_occurrence_id::Union{Missing, Int64}\n\n\n\n\n\n","category":"type"},{"location":"api/#OMOPCommonDataModel.Vocabulary","page":"API","title":"OMOPCommonDataModel.Vocabulary","text":"CDM table name: VOCABULARY\n\nJulia struct name: Vocabulary\n\nstruct Vocabulary <: CDMType\n\nvocabulary_id::String\nvocabulary_name::String\nvocabulary_reference::String\nvocabulary_version::String\nvocabulary_concept_id::Int64\n\n\n\n\n\n","category":"type"},{"location":"api/#OMOPCommonDataModel.cdm_version-Tuple{}","page":"API","title":"OMOPCommonDataModel.cdm_version","text":"The version of the OMOP Common Data Model (CDM) being implemented.\n\n\n\n\n\n","category":"method"},{"location":"api/#OMOPCommonDataModel.version-Tuple{}","page":"API","title":"OMOPCommonDataModel.version","text":"The version of the OMOPCommonDataModel.jl Julia package.\n\n\n\n\n\n","category":"method"},{"location":"version/","page":"CDM Version","title":"CDM Version","text":"CurrentModule = OMOPCommonDataModel","category":"page"},{"location":"version/#CDM-Version","page":"CDM Version","title":"CDM Version","text":"","category":"section"},{"location":"version/","page":"CDM Version","title":"CDM Version","text":"The following table shows which version of the OMOP Common Data Model (CDM) is implemented in each version of the OMOPCommonDataModel.jl Julia package.","category":"page"},{"location":"version/","page":"CDM Version","title":"CDM Version","text":"Common Data Model (CDM) OMOPCommonDataModel.jl\n5.1.3 0.1.0","category":"page"},{"location":"version/","page":"CDM Version","title":"CDM Version","text":"In order to see the current CDM version, use the OMOPCommonDataModel.cdm_version function:","category":"page"},{"location":"version/","page":"CDM Version","title":"CDM Version","text":"julia> using OMOPCommonDataModel\n\njulia> OMOPCommonDataModel.cdm_version()\nv\"5.1.3\"","category":"page"},{"location":"version/","page":"CDM Version","title":"CDM Version","text":"In order to see the current OMOPCommonDataModel.jl version, use the OMOPCommonDataModel.cdm_version function:","category":"page"},{"location":"version/","page":"CDM Version","title":"CDM Version","text":"julia> using OMOPCommonDataModel\n\njulia> OMOPCommonDataModel.version()\nv\"0.1.0-DEV\"","category":"page"},{"location":"version/","page":"CDM Version","title":"CDM Version","text":"To see all versions of the Common Data Model, go to the CommonDataModel release page.","category":"page"},{"location":"version/","page":"CDM Version","title":"CDM Version","text":"To see all versions of OMOPCommonDataModel.jl, go to the OMOPCommonDataModel.jl release page.","category":"page"},{"location":"examples/","page":"Examples","title":"Examples","text":"CurrentModule = OMOPCommonDataModel","category":"page"},{"location":"examples/#Examples","page":"Examples","title":"Examples","text":"","category":"section"},{"location":"examples/","page":"Examples","title":"Examples","text":"julia> using OMOPCommonDataModel\n\njulia> using DataFrames, PrettyPrint, StructArrays\n\njulia> jack = Person(person_id = 1, gender_concept_id = 12, year_of_birth = 1900, race_concept_id = 21, ethnicity_concept_id = 31, gender_source_concept_id = 42, race_source_concept_id = 51, ethnicity_source_concept_id = 61)\nPerson(1, 12, 1900, missing, missing, missing, 21, 31, missing, missing, missing, missing, missing, 42, missing, 51, missing, 61)\n\njulia> jill = Person(person_id = 2, gender_concept_id = 11, year_of_birth = 1900, month_of_birth = 1, day_of_birth = 1, race_concept_id = 22, ethnicity_concept_id = 32, gender_source_concept_id = 41, race_source_concept_id = 52, ethnicity_source_concept_id = 62)\nPerson(2, 11, 1900, 1, 1, missing, 22, 32, missing, missing, missing, missing, missing, 41, missing, 52, missing, 62)\n\njulia> pprint(jack)\nPerson(\n  person_id=1,\n  gender_concept_id=12,\n  year_of_birth=1900,\n  month_of_birth=Missing(),\n  day_of_birth=Missing(),\n  birth_datetime=Missing(),\n  race_concept_id=21,\n  ethnicity_concept_id=31,\n  location_id=Missing(),\n  provider_id=Missing(),\n  care_site_id=Missing(),\n  person_source_value=Missing(),\n  gender_source_value=Missing(),\n  gender_source_concept_id=42,\n  race_source_value=Missing(),\n  race_source_concept_id=51,\n  ethnicity_source_value=Missing(),\n  ethnicity_source_concept_id=61,\n)\n\njulia> pprint(jill)\nPerson(\n  person_id=2,\n  gender_concept_id=11,\n  year_of_birth=1900,\n  month_of_birth=1,\n  day_of_birth=1,\n  birth_datetime=Missing(),\n  race_concept_id=22,\n  ethnicity_concept_id=32,\n  location_id=Missing(),\n  provider_id=Missing(),\n  care_site_id=Missing(),\n  person_source_value=Missing(),\n  gender_source_value=Missing(),\n  gender_source_concept_id=41,\n  race_source_value=Missing(),\n  race_source_concept_id=52,\n  ethnicity_source_value=Missing(),\n  ethnicity_source_concept_id=62,\n)\n\njulia> person_table = StructArray(Person[jack, jill])\n2-element StructArray(::Vector{Int64}, ::Vector{Int64}, ::Vector{Int64}, ::Vector{Union{Missing, Int64}}, ::Vector{Union{Missing, Int64}}, ::Vector{Union{Missing, Dates.DateTime}}, ::Vector{Int64}, ::Vector{Int64}, ::Vector{Union{Missing, Int64}}, ::Vector{Union{Missing, Int64}}, ::Vector{Union{Missing, Int64}}, ::Vector{Union{Missing, String}}, ::Vector{Union{Missing, String}}, ::Vector{Union{Missing, Int64}}, ::Vector{Union{Missing, String}}, ::Vector{Union{Missing, Int64}}, ::Vector{Union{Missing, String}}, ::Vector{Union{Missing, Int64}}) with eltype Person:\n Person(1, 12, 1900, missing, missing, missing, 21, 31, missing, missing, missing, missing, missing, 42, missing, 51, missing, 61)\n Person(2, 11, 1900, 1, 1, missing, 22, 32, missing, missing, missing, missing, missing, 41, missing, 52, missing, 62)\n\njulia> person_table_df = DataFrame(person_table);\n\njulia> @show(person_table_df);\nperson_table_df = 2×18 DataFrame\n│ Row │ person_id │ gender_concept_id │ year_of_birth │ month_of_birth │ day_of_birth │ birth_datetime │ race_concept_id │ ethnicity_concept_id │ location_id │ provider_id │ care_site_id │ person_source_value │ gender_source_value │ gender_source_concept_id │ race_source_value │ race_source_concept_id │ ethnicity_source_value │ ethnicity_source_concept_id │\n│     │ Int64     │ Int64             │ Int64         │ Int64?         │ Int64?       │ DateTime…?     │ Int64           │ Int64                │ Int64?      │ Int64?      │ Int64?       │ String?             │ String?             │ Union{Missing, Int64}    │ String?           │ Union{Missing, Int64}  │ Union{Missing, String} │ Union{Missing, Int64}       │\n├─────┼───────────┼───────────────────┼───────────────┼────────────────┼──────────────┼────────────────┼─────────────────┼──────────────────────┼─────────────┼─────────────┼──────────────┼─────────────────────┼─────────────────────┼──────────────────────────┼───────────────────┼────────────────────────┼────────────────────────┼─────────────────────────────┤\n│ 1   │ 1         │ 12                │ 1900          │ missing        │ missing      │ missing        │ 21              │ 31                   │ missing     │ missing     │ missing      │ missing             │ missing             │ 42                       │ missing           │ 51                     │ missing                │ 61                          │\n│ 2   │ 2         │ 11                │ 1900          │ 1              │ 1            │ missing        │ 22              │ 32                   │ missing     │ missing     │ missing      │ missing             │ missing             │ 41                       │ missing           │ 52                     │ missing                │ 62                          │","category":"page"},{"location":"","page":"Home","title":"Home","text":"CurrentModule = OMOPCommonDataModel","category":"page"},{"location":"#OMOPCommonDataModel","page":"Home","title":"OMOPCommonDataModel","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"OMOPCommonDataModel.jl is a pure Julia implementation of the OMOP Common Data Model (CDM).","category":"page"}]
}
