

const getCategories = () => {
  return [
    {
      label: "i18n('all')",
      id: 'All',
      parentId: '',
    },
    {
      label: "i18n('agriculture_forestry_and_fishing_cat')",
      id: 'agriculture_forestry_and_fishing_cat',
      parentId: '',
    },
    {
      label: "i18n('mining_and_quarrying_cat')",
      id: 'mining_and_quarrying_cat',
      parentId: '',
    },
    {
      label: "i18n('manufacturing_cat')",
      id: 'manufacturing_cat',
      parentId: '',
    },
    {
      label:
        "i18n('wholesale_and_retail_trade_repair_of_motor_vehicles_and_motorcycles_cat')",
      id:
        'wholesale_and_retail_trade_repair_of_motor_vehicles_and_motorcycles_cat',
      parentId: '',
    },
    {
      label: "i18n('electricity_gas_steam_and_air_conditioning_supply_cat')",
      id: 'electricity_gas_steam_and_air_conditioning_supply_cat',
      parentId: '',
    },
    {
      label:
        "i18n('water_supply_sewerage_waste_management_and_remediation_activities_cat')",
      id:
        'water_supply_sewerage_waste_management_and_remediation_activities_cat',
      parentId: '',
    },
    {
      label: "i18n('professional_scientific_and_technical_activities_cat')",
      id: 'professional_scientific_and_technical_activities_cat',
      parentId: '',
    },
  ];
};

const getDivisions = (parentId: string) => {
  return [
    {
      label: "i18n('all')",
      id: 'All',
      parentId: 'mandatory',
    },
    {
      label:
        "i18n('crop_and_animal_production_hunting_and_related_service_activities_div')",
      id:
        'crop_and_animal_production_hunting_and_related_service_activities_div',
      parentId: 'agriculture_forestry_and_fishing_cat',
    },
    {
      label: "i18n('mining_support_service_activities_div')",
      id: 'mining_support_service_activities_div',
      parentId: 'mining_and_quarrying_cat',
    },
    {
      label: "i18n('manufacture_of_food_products_div')",
      id: 'manufacture_of_food_products_div',
      parentId: 'manufacturing_cat',
    },
    {
      label: "i18n('manufacture_of_beverages_div')",
      id: 'manufacture_of_beverages_div',
      parentId: 'manufacturing_cat',
    },
    {
      label: "i18n('manufacture_of_textiles_div')",
      id: 'manufacture_of_textiles_div',
      parentId: 'manufacturing_cat',
    },
    {
      label: "i18n('manufacture_of_wearing_apparel_div')",
      id: 'manufacture_of_wearing_apparel_div',
      parentId: 'manufacturing_cat',
    },
    {
      label: "i18n('manufacture_of_leather_and_related_products_div')",
      id: 'manufacture_of_leather_and_related_products_div',
      parentId: 'manufacturing_cat',
    },
    {
      label:
        "i18n('manufacture_of_wood_and_of_products_of_wood_and_cork_except_furniture_manufacture_of_articles_of_straw_and_plaiting_materials_div')",
      id:
        'manufacture_of_wood_and_of_products_of_wood_and_cork_except_furniture_manufacture_of_articles_of_straw_and_plaiting_materials_div',
      parentId: 'manufacturing_cat',
    },
    {
      label: "i18n('manufacture_of_paper_and_paper_products_div')",
      id: 'manufacture_of_paper_and_paper_products_div',
      parentId: 'manufacturing_cat',
    },
    {
      label: "i18n('printing_and_reproduction_of_recorded_media_div')",
      id: 'printing_and_reproduction_of_recorded_media_div',
      parentId: 'manufacturing_cat',
    },
    {
      label: "i18n('manufacture_of_coke_and_refined_petroleum_products_div')",
      id: 'manufacture_of_coke_and_refined_petroleum_products_div',
      parentId: 'manufacturing_cat',
    },
    {
      label: "i18n('manufacture_of_chemicals_and_chemical_products_div')",
      id: 'manufacture_of_chemicals_and_chemical_products_div',
      parentId: 'manufacturing_cat',
    },
    {
      label:
        "i18n('manufacture_of_pharmaceuticals_medicinal_chemical_and_botanical_products_div')",
      id:
        'manufacture_of_pharmaceuticals_medicinal_chemical_and_botanical_products_div',
      parentId: 'manufacturing_cat',
    },
    {
      label: "i18n('manufacture_of_rubber_and_plastics_products_div')",
      id: 'manufacture_of_rubber_and_plastics_products_div',
      parentId: 'manufacturing_cat',
    },
    {
      label: "i18n('manufacture_of_other_non_metallic_mineral_products_div')",
      id: 'manufacture_of_other_non_metallic_mineral_products_div',
      parentId: 'manufacturing_cat',
    },
    {
      label: "i18n('manufacture_of_basic_metals_div')",
      id: 'manufacture_of_basic_metals_div',
      parentId: 'manufacturing_cat',
    },
    {
      label:
        "i18n('manufacture_of_fabricated_metal_products_except_machinery_and_equipment_div')",
      id:
        'manufacture_of_fabricated_metal_products_except_machinery_and_equipment_div',
      parentId: 'manufacturing_cat',
    },
    {
      label:
        "i18n('manufacture_of_computer_electronic_and_optical_products_div')",
      id: 'manufacture_of_computer_electronic_and_optical_products_div',
      parentId: 'manufacturing_cat',
    },
    {
      label: "i18n('manufacture_of_electrical_equipment_div')",
      id: 'manufacture_of_electrical_equipment_div',
      parentId: 'manufacturing_cat',
    },
    {
      label: "i18n('manufacture_of_machinery_and_equipment_nec_div')",
      id: 'manufacture_of_machinery_and_equipment_nec_div',
      parentId: 'manufacturing_cat',
    },
    {
      label:
        "i18n('manufacture_of_motor_vehicles_trailers_and_semi_trailers_div')",
      id: 'manufacture_of_motor_vehicles_trailers_and_semi_trailers_div',
      parentId: 'manufacturing_cat',
    },
    {
      label: "i18n('manufacture_of_other_transport_equipment_div')",
      id: 'manufacture_of_other_transport_equipment_div',
      parentId: 'manufacturing_cat',
    },
    {
      label: "i18n('manufacture_of_furniture_div')",
      id: 'manufacture_of_furniture_div',
      parentId: 'manufacturing_cat',
    },
    {
      label: "i18n('other_manufacturing_div')",
      id: 'other_manufacturing_div',
      parentId: 'manufacturing_cat',
    },
    {
      label:
        "i18n('wholesale_trade_except_of_motor_vehicles_and_motorcycles_div')",
      id: 'wholesale_trade_except_of_motor_vehicles_and_motorcycles_div',
      parentId:
        'wholesale_and_retail_trade_repair_of_motor_vehicles_and_motorcycles_cat',
    },
    {
      label: "i18n('electricity_gas_steam_and_air_conditioning_supply_div')",
      id: 'electricity_gas_steam_and_air_conditioning_supply_div',
      parentId: 'electricity_gas_steam_and_air_conditioning_supply_cat',
    },
    {
      label: "i18n('water_collection_treatment_and_supply_div')",
      id: 'water_collection_treatment_and_supply_div',
      parentId:
        'water_supply_sewerage_waste_management_and_remediation_activities_cat',
    },
    {
      label:
        "i18n('waste_collection_treatment_and_disposal_activities_materials_recovery_div')",
      id:
        'waste_collection_treatment_and_disposal_activities_materials_recovery_div',
      parentId:
        'water_supply_sewerage_waste_management_and_remediation_activities_cat',
    },
    {
      label: "i18n('scientific_research_and_development_div')",
      id: 'scientific_research_and_development_div',
      parentId: 'professional_scientific_and_technical_activities_cat',
    },
  ].filter(
    (obj: any) =>
      parentId === 'All' ||
      obj.parentId === parentId ||
      obj.parentId === 'mandatory'
  );
};

const getGroups = (parentId: string) => {
  return [
    {
      label: "i18n('all')",
      id: 'All',
      parentId: 'mandatory',
    },
    {
      label: "i18n('plant_propagation_group')",
      id: 'plant_propagation_group',
      parentId:
        'crop_and_animal_production_hunting_and_related_service_activities_div',
    },
    {
      label:
        "i18n('support_activities_for_petroleum_and_natural_gas_extraction_group')",
      id: 'support_activities_for_petroleum_and_natural_gas_extraction_group',
      parentId: 'mining_support_service_activities_div',
    },
    {
      label: "i18n('processing_and_preserving_of_meat_group')",
      id: 'processing_and_preserving_of_meat_group',
      parentId: 'manufacture_of_food_products_div',
    },
    {
      label:
        "i18n('processing_and_preserving_of_fish_crustaceans_and_molluscs_group')",
      id: 'processing_and_preserving_of_fish_crustaceans_and_molluscs_group',
      parentId: 'manufacture_of_food_products_div',
    },
    {
      label: "i18n('processing_and_preserving_of_fruit_and_vegetables_group')",
      id: 'processing_and_preserving_of_fruit_and_vegetables_group',
      parentId: 'manufacture_of_food_products_div',
    },
    {
      label: "i18n('manufacture_of_vegetable_and_animal_oils_and_fats_group')",
      id: 'manufacture_of_vegetable_and_animal_oils_and_fats_group',
      parentId: 'manufacture_of_food_products_div',
    },
    {
      label: "i18n('manufacture_of_dairy_products_group')",
      id: 'manufacture_of_dairy_products_group',
      parentId: 'manufacture_of_food_products_div',
    },
    {
      label:
        "i18n('manufacture_of_grain_mill_products_starches_and_starch_products_group')",
      id:
        'manufacture_of_grain_mill_products_starches_and_starch_products_group',
      parentId: 'manufacture_of_food_products_div',
    },
    {
      label: "i18n('manufacture_of_other_food_products_group')",
      id: 'manufacture_of_other_food_products_group',
      parentId: 'manufacture_of_food_products_div',
    },
    {
      label: "i18n('manufacture_of_prepared_animal_feeds_group')",
      id: 'manufacture_of_prepared_animal_feeds_group',
      parentId: 'manufacture_of_food_products_div',
    },
    {
      label: "i18n('manufacture_of_beverages_group')",
      id: 'manufacture_of_beverages_group',
      parentId: 'manufacture_of_beverages_div',
    },
    {
      label: "i18n('spinning_weaving_and_finishing_of_textiles_group')",
      id: 'spinning_weaving_and_finishing_of_textiles_group',
      parentId: 'manufacture_of_textiles_div',
    },
    {
      label: "i18n('manufacture_of_other_textiles_group')",
      id: 'manufacture_of_other_textiles_group',
      parentId: 'manufacture_of_textiles_div',
    },
    {
      label: "i18n('manufacture_of_wearing_apparel_except_fur_apparel_group')",
      id: 'manufacture_of_wearing_apparel_except_fur_apparel_group',
      parentId: 'manufacture_of_wearing_apparel_div',
    },
    {
      label: "i18n('manufacture_of_articles_of_fur_group')",
      id: 'manufacture_of_articles_of_fur_group',
      parentId: 'manufacture_of_wearing_apparel_div',
    },
    {
      label: "i18n('manufacture_of_knitted_and_crocheted_apparel_group')",
      id: 'manufacture_of_knitted_and_crocheted_apparel_group',
      parentId: 'manufacture_of_wearing_apparel_div',
    },
    {
      label:
        "i18n('tanning_and_dressing_of_leather_manufacture_of_luggage_handbags_saddlery_and_harness_dressing_and_dyeing_of_fur_group')",
      id:
        'tanning_and_dressing_of_leather_manufacture_of_luggage_handbags_saddlery_and_harness_dressing_and_dyeing_of_fur_group',
      parentId: 'manufacture_of_leather_and_related_products_div',
    },
    {
      label: "i18n('manufacture_of_footwear_group')",
      id: 'manufacture_of_footwear_group',
      parentId: 'manufacture_of_leather_and_related_products_div',
    },
    {
      label: "i18n('sawmilling_and_planing_of_wood_group')",
      id: 'sawmilling_and_planing_of_wood_group',
      parentId:
        'manufacture_of_wood_and_of_products_of_wood_and_cork_except_furniture_manufacture_of_articles_of_straw_and_plaiting_materials_div',
    },
    {
      label:
        "i18n('manufacture_of_products_of_wood_cork_straw_and_plaiting_materials_group')",
      id:
        'manufacture_of_products_of_wood_cork_straw_and_plaiting_materials_group',
      parentId:
        'manufacture_of_wood_and_of_products_of_wood_and_cork_except_furniture_manufacture_of_articles_of_straw_and_plaiting_materials_div',
    },
    {
      label: "i18n('manufacture_of_paper_and_paper_products_group')",
      id: 'manufacture_of_paper_and_paper_products_group',
      parentId: 'manufacture_of_paper_and_paper_products_div',
    },
    {
      label:
        "i18n('printing_and_service_activities_related_to_printing_group')",
      id: 'printing_and_service_activities_related_to_printing_group',
      parentId: 'printing_and_reproduction_of_recorded_media_div',
    },
    {
      label: "i18n('reproduction_of_recorded_media_group')",
      id: 'reproduction_of_recorded_media_group',
      parentId: 'printing_and_reproduction_of_recorded_media_div',
    },
    {
      label: "i18n('manufacture_of_coke_oven_products_group')",
      id: 'manufacture_of_coke_oven_products_group',
      parentId: 'manufacture_of_coke_and_refined_petroleum_products_div',
    },
    {
      label: "i18n('manufacture_of_refined_petroleum_products_group')",
      id: 'manufacture_of_refined_petroleum_products_group',
      parentId: 'manufacture_of_coke_and_refined_petroleum_products_div',
    },
    {
      label:
        "i18n('manufacture_of_basic_chemicals_fertilizers_and_nitrogen_compounds_plastics_and_synthetic_rubber_in_primary_forms_group')",
      id:
        'manufacture_of_basic_chemicals_fertilizers_and_nitrogen_compounds_plastics_and_synthetic_rubber_in_primary_forms_group',
      parentId: 'manufacture_of_chemicals_and_chemical_products_div',
    },
    {
      label: "i18n('manufacture_of_other_chemical_products_group')",
      id: 'manufacture_of_other_chemical_products_group',
      parentId: 'manufacture_of_chemicals_and_chemical_products_div',
    },
    {
      label: "i18n('manufacture_of_man_made_fibres_group')",
      id: 'manufacture_of_man_made_fibres_group',
      parentId: 'manufacture_of_chemicals_and_chemical_products_div',
    },
    {
      label:
        "i18n('manufacture_of_pharmaceuticals_medicinal_chemical_and_botanical_products_group')",
      id:
        'manufacture_of_pharmaceuticals_medicinal_chemical_and_botanical_products_group',
      parentId:
        'manufacture_of_pharmaceuticals_medicinal_chemical_and_botanical_products_div',
    },
    {
      label: "i18n('manufacture_of_rubber_products_group')",
      id: 'manufacture_of_rubber_products_group',
      parentId: 'manufacture_of_rubber_and_plastics_products_div',
    },
    {
      label: "i18n('manufacture_of_plastics_products_group')",
      id: 'manufacture_of_plastics_products_group',
      parentId: 'manufacture_of_rubber_and_plastics_products_div',
    },
    {
      label: "i18n('manufacture_of_glass_and_glass_products_group')",
      id: 'manufacture_of_glass_and_glass_products_group',
      parentId: 'manufacture_of_other_non_metallic_mineral_products_div',
    },
    {
      label: "i18n('manufacture_of_non_metallic_mineral_products_nec_group')",
      id: 'manufacture_of_non_metallic_mineral_products_nec_group',
      parentId: 'manufacture_of_other_non_metallic_mineral_products_div',
    },
    {
      label: "i18n('manufacture_of_basic_iron_and_steel_group')",
      id: 'manufacture_of_basic_iron_and_steel_group',
      parentId: 'manufacture_of_basic_metals_div',
    },
    {
      label:
        "i18n('manufacture_of_basic_precious_and_other_non_ferrous_metals_group')",
      id: 'manufacture_of_basic_precious_and_other_non_ferrous_metals_group',
      parentId: 'manufacture_of_basic_metals_div',
    },
    {
      label: "i18n('casting_of_metals_group')",
      id: 'casting_of_metals_group',
      parentId: 'manufacture_of_basic_metals_div',
    },
    {
      label:
        "i18n('manufacture_of_structural_metal_products_tanks_reservoirs_and_steam_generators_group')",
      id:
        'manufacture_of_structural_metal_products_tanks_reservoirs_and_steam_generators_group',
      parentId:
        'manufacture_of_fabricated_metal_products_except_machinery_and_equipment_div',
    },
    {
      label: "i18n('manufacture_of_weapons_and_ammunition_group')",
      id: 'manufacture_of_weapons_and_ammunition_group',
      parentId:
        'manufacture_of_fabricated_metal_products_except_machinery_and_equipment_div',
    },
    {
      label:
        "i18n('manufacture_of_other_fabricated_metal_products_metalworking_service_activities_group')",
      id:
        'manufacture_of_other_fabricated_metal_products_metalworking_service_activities_group',
      parentId:
        'manufacture_of_fabricated_metal_products_except_machinery_and_equipment_div',
    },
    {
      label: "i18n('manufacture_of_electronic_components_and_boards_group')",
      id: 'manufacture_of_electronic_components_and_boards_group',
      parentId: 'manufacture_of_computer_electronic_and_optical_products_div',
    },
    {
      label: "i18n('manufacture_of_computers_and_peripheral_equipment_group')",
      id: 'manufacture_of_computers_and_peripheral_equipment_group',
      parentId: 'manufacture_of_computer_electronic_and_optical_products_div',
    },
    {
      label: "i18n('manufacture_of_communication_equipment_group')",
      id: 'manufacture_of_communication_equipment_group',
      parentId: 'manufacture_of_computer_electronic_and_optical_products_div',
    },
    {
      label: "i18n('manufacture_of_consumer_electronics_group')",
      id: 'manufacture_of_consumer_electronics_group',
      parentId: 'manufacture_of_computer_electronic_and_optical_products_div',
    },
    {
      label:
        "i18n('manufacture_of_measuring_testing_navigating_and_control_equipment_watches_and_clocks_group')",
      id:
        'manufacture_of_measuring_testing_navigating_and_control_equipment_watches_and_clocks_group',
      parentId: 'manufacture_of_computer_electronic_and_optical_products_div',
    },
    {
      label:
        "i18n('manufacture_of_irradiation_electromedical_and_electrotherapeutic_equipment_group')",
      id:
        'manufacture_of_irradiation_electromedical_and_electrotherapeutic_equipment_group',
      parentId: 'manufacture_of_computer_electronic_and_optical_products_div',
    },
    {
      label:
        "i18n('manufacture_of_optical_instruments_and_photographic_equipment_group')",
      id: 'manufacture_of_optical_instruments_and_photographic_equipment_group',
      parentId: 'manufacture_of_computer_electronic_and_optical_products_div',
    },
    {
      label: "i18n('manufacture_of_magnetic_and_optical_media_group')",
      id: 'manufacture_of_magnetic_and_optical_media_group',
      parentId: 'manufacture_of_computer_electronic_and_optical_products_div',
    },
    {
      label:
        "i18n('manufacture_of_electric_motors_generators_transformers_and_electricity_distribution_and_control_apparatus_group')",
      id:
        'manufacture_of_electric_motors_generators_transformers_and_electricity_distribution_and_control_apparatus_group',
      parentId: 'manufacture_of_electrical_equipment_div',
    },
    {
      label: "i18n('manufacture_of_batteries_and_accumulators_group')",
      id: 'manufacture_of_batteries_and_accumulators_group',
      parentId: 'manufacture_of_electrical_equipment_div',
    },
    {
      label: "i18n('manufacture_of_wiring_and_wiring_devices_group')",
      id: 'manufacture_of_wiring_and_wiring_devices_group',
      parentId: 'manufacture_of_electrical_equipment_div',
    },
    {
      label: "i18n('manufacture_of_electric_lighting_equipment_group')",
      id: 'manufacture_of_electric_lighting_equipment_group',
      parentId: 'manufacture_of_electrical_equipment_div',
    },
    {
      label: "i18n('manufacture_of_domestic_appliances_group')",
      id: 'manufacture_of_domestic_appliances_group',
      parentId: 'manufacture_of_electrical_equipment_div',
    },
    {
      label: "i18n('manufacture_of_other_electrical_equipment_group')",
      id: 'manufacture_of_other_electrical_equipment_group',
      parentId: 'manufacture_of_electrical_equipment_div',
    },
    {
      label: "i18n('manufacture_of_general_purpose_machinery_group')",
      id: 'manufacture_of_general_purpose_machinery_group',
      parentId: 'manufacture_of_machinery_and_equipment_nec_div',
    },
    {
      label: "i18n('manufacture_of_special_purpose_machinery_group')",
      id: 'manufacture_of_special_purpose_machinery_group',
      parentId: 'manufacture_of_machinery_and_equipment_nec_div',
    },
    {
      label: "i18n('manufacture_of_motor_vehicles_group')",
      id: 'manufacture_of_motor_vehicles_group',
      parentId: 'manufacture_of_motor_vehicles_trailers_and_semi_trailers_div',
    },
    {
      label:
        "i18n('manufacture_of_bodies_coachwork_for_motor_vehicles_manufacture_of_trailers_and_semi_trailers_group')",
      id:
        'manufacture_of_bodies_coachwork_for_motor_vehicles_manufacture_of_trailers_and_semi_trailers_group',
      parentId: 'manufacture_of_motor_vehicles_trailers_and_semi_trailers_div',
    },
    {
      label:
        "i18n('manufacture_of_parts_and_accessories_for_motor_vehicles_group')",
      id: 'manufacture_of_parts_and_accessories_for_motor_vehicles_group',
      parentId: 'manufacture_of_motor_vehicles_trailers_and_semi_trailers_div',
    },
    {
      label: "i18n('building_of_ships_and_boats_group')",
      id: 'building_of_ships_and_boats_group',
      parentId: 'manufacture_of_other_transport_equipment_div',
    },
    {
      label:
        "i18n('manufacture_of_railway_locomotives_and_rolling_stock_group')",
      id: 'manufacture_of_railway_locomotives_and_rolling_stock_group',
      parentId: 'manufacture_of_other_transport_equipment_div',
    },
    {
      label:
        "i18n('manufacture_of_air_and_spacecraft_and_related_machinery_group')",
      id: 'manufacture_of_air_and_spacecraft_and_related_machinery_group',
      parentId: 'manufacture_of_other_transport_equipment_div',
    },
    {
      label: "i18n('manufacture_of_military_fighting_vehicles_group')",
      id: 'manufacture_of_military_fighting_vehicles_group',
      parentId: 'manufacture_of_other_transport_equipment_div',
    },
    {
      label: "i18n('manufacture_of_transport_equipment_nec_group')",
      id: 'manufacture_of_transport_equipment_nec_group',
      parentId: 'manufacture_of_other_transport_equipment_div',
    },
    {
      label: "i18n('manufacture_of_furniture_group')",
      id: 'manufacture_of_furniture_group',
      parentId: 'manufacture_of_furniture_div',
    },
    {
      label:
        "i18n('manufacture_of_jewellery_bijouterie_and_related_articles_group')",
      id: 'manufacture_of_jewellery_bijouterie_and_related_articles_group',
      parentId: 'other_manufacturing_div',
    },
    {
      label: "i18n('manufacture_of_musical_instruments_group')",
      id: 'manufacture_of_musical_instruments_group',
      parentId: 'other_manufacturing_div',
    },
    {
      label: "i18n('manufacture_of_sports_goods_group')",
      id: 'manufacture_of_sports_goods_group',
      parentId: 'other_manufacturing_div',
    },
    {
      label: "i18n('manufacture_of_games_and_toys_group')",
      id: 'manufacture_of_games_and_toys_group',
      parentId: 'other_manufacturing_div',
    },
    {
      label:
        "i18n('manufacture_of_medical_and_dental_instruments_and_supplies_group')",
      id: 'manufacture_of_medical_and_dental_instruments_and_supplies_group',
      parentId: 'other_manufacturing_div',
    },
    {
      label: "i18n('other_manufacturing_nec_group')",
      id: 'other_manufacturing_nec_group',
      parentId: 'other_manufacturing_div',
    },
    {
      label: "i18n('wholesale_on_a_fee_or_contract_basis_group')",
      id: 'wholesale_on_a_fee_or_contract_basis_group',
      parentId: 'wholesale_trade_except_of_motor_vehicles_and_motorcycles_div',
    },
    {
      label:
        "i18n('electric_power_generation_transmission_and_distribution_group')",
      id: 'electric_power_generation_transmission_and_distribution_group',
      parentId: 'electricity_gas_steam_and_air_conditioning_supply_div',
    },
    {
      label: "i18n('steam_and_air_conditioning_supply_group')",
      id: 'steam_and_air_conditioning_supply_group',
      parentId: 'electricity_gas_steam_and_air_conditioning_supply_div',
    },
    {
      label: "i18n('water_collection_treatment_and_supply_group')",
      id: 'water_collection_treatment_and_supply_group',
      parentId: 'water_collection_treatment_and_supply_div',
    },
    {
      label: "i18n('waste_treatment_and_disposal_group')",
      id: 'waste_treatment_and_disposal_group',
      parentId:
        'waste_collection_treatment_and_disposal_activities_materials_recovery_div',
    },
    {
      label: "i18n('materials_recovery_group')",
      id: 'materials_recovery_group',
      parentId:
        'waste_collection_treatment_and_disposal_activities_materials_recovery_div',
    },
    {
      label:
        "i18n('research_and_experimental_development_on_natural_sciences_and_engineering_group')",
      id:
        'research_and_experimental_development_on_natural_sciences_and_engineering_group',
      parentId: 'scientific_research_and_development_div',
    },
  ].filter(
    (obj: any) =>
      parentId === 'All' ||
      obj.parentId === parentId ||
      obj.parentId === 'mandatory'
  );
};

const getClasses = (parentId: string) => {
  return [
    {
      label: "i18n('all')",
      id: 'All',
      parentId: 'mandatory',
    },
    {
      label: "i18n('plant_propagation_class')",
      id: 'plant_propagation_class',
      parentId: 'plant_propagation_group',
    },
    {
      label:
        "i18n('support_activities_for_petroleum_and_natural_gas_extraction_class')",
      id: 'support_activities_for_petroleum_and_natural_gas_extraction_class',
      parentId:
        'support_activities_for_petroleum_and_natural_gas_extraction_group',
    },
    {
      label: "i18n('processing_and_preserving_of_meat_class')",
      id: 'processing_and_preserving_of_meat_class',
      parentId: 'processing_and_preserving_of_meat_group',
    },
    {
      label:
        "i18n('processing_and_preserving_of_fish_crustaceans_and_molluscs_class')",
      id: 'processing_and_preserving_of_fish_crustaceans_and_molluscs_class',
      parentId:
        'processing_and_preserving_of_fish_crustaceans_and_molluscs_group',
    },
    {
      label: "i18n('processing_and_preserving_of_fruit_and_vegetables_class')",
      id: 'processing_and_preserving_of_fruit_and_vegetables_class',
      parentId: 'processing_and_preserving_of_fruit_and_vegetables_group',
    },
    {
      label: "i18n('manufacture_of_vegetable_and_animal_oils_and_fats_class')",
      id: 'manufacture_of_vegetable_and_animal_oils_and_fats_class',
      parentId: 'manufacture_of_vegetable_and_animal_oils_and_fats_group',
    },
    {
      label: "i18n('manufacture_of_dairy_products_class')",
      id: 'manufacture_of_dairy_products_class',
      parentId: 'manufacture_of_dairy_products_group',
    },
    {
      label: "i18n('manufacture_of_grain_mill_products_class')",
      id: 'manufacture_of_grain_mill_products_class',
      parentId:
        'manufacture_of_grain_mill_products_starches_and_starch_products_group',
    },
    {
      label: "i18n('manufacture_of_starches_and_starch_products_class')",
      id: 'manufacture_of_starches_and_starch_products_class',
      parentId:
        'manufacture_of_grain_mill_products_starches_and_starch_products_group',
    },
    {
      label: "i18n('manufacture_of_bakery_products_class')",
      id: 'manufacture_of_bakery_products_class',
      parentId: 'manufacture_of_other_food_products_group',
    },
    {
      label: "i18n('manufacture_of_sugar_class')",
      id: 'manufacture_of_sugar_class',
      parentId: 'manufacture_of_other_food_products_group',
    },
    {
      label:
        "i18n('manufacture_of_cocoa_chocolate_and_sugar_confectionery_class')",
      id: 'manufacture_of_cocoa_chocolate_and_sugar_confectionery_class',
      parentId: 'manufacture_of_other_food_products_group',
    },
    {
      label:
        "i18n('manufacture_of_macaroni_noodles_couscous_and_similar_farinaceous_products_class')",
      id:
        'manufacture_of_macaroni_noodles_couscous_and_similar_farinaceous_products_class',
      parentId: 'manufacture_of_other_food_products_group',
    },
    {
      label: "i18n('manufacture_of_prepared_meals_and_dishes_class')",
      id: 'manufacture_of_prepared_meals_and_dishes_class',
      parentId: 'manufacture_of_other_food_products_group',
    },
    {
      label: "i18n('manufacture_of_other_food_products_nec_class')",
      id: 'manufacture_of_other_food_products_nec_class',
      parentId: 'manufacture_of_other_food_products_group',
    },
    {
      label: "i18n('manufacture_of_prepared_animal_feeds_class')",
      id: 'manufacture_of_prepared_animal_feeds_class',
      parentId: 'manufacture_of_prepared_animal_feeds_group',
    },
    {
      label: "i18n('manufacture_of_wines_class')",
      id: 'manufacture_of_wines_class',
      parentId: 'manufacture_of_beverages_group',
    },
    {
      label: "i18n('manufacture_of_malt_liquors_and_malt_class')",
      id: 'manufacture_of_malt_liquors_and_malt_class',
      parentId: 'manufacture_of_beverages_group',
    },
    {
      label:
        "i18n('manufacture_of_soft_drinks_production_of_mineral_waters_and_other_bottled_waters_class')",
      id:
        'manufacture_of_soft_drinks_production_of_mineral_waters_and_other_bottled_waters_class',
      parentId: 'manufacture_of_beverages_group',
    },
    {
      label: "i18n('preparation_and_spinning_of_textile_fibres_class')",
      id: 'preparation_and_spinning_of_textile_fibres_class',
      parentId: 'spinning_weaving_and_finishing_of_textiles_group',
    },
    {
      label: "i18n('weaving_of_textiles_class')",
      id: 'weaving_of_textiles_class',
      parentId: 'spinning_weaving_and_finishing_of_textiles_group',
    },
    {
      label: "i18n('finishing_of_textiles_class')",
      id: 'finishing_of_textiles_class',
      parentId: 'spinning_weaving_and_finishing_of_textiles_group',
    },
    {
      label: "i18n('manufacture_of_knitted_and_crocheted_fabrics_class')",
      id: 'manufacture_of_knitted_and_crocheted_fabrics_class',
      parentId: 'manufacture_of_other_textiles_group',
    },
    {
      label:
        "i18n('manufacture_of_made_up_textile_articles_except_apparel_class')",
      id: 'manufacture_of_made_up_textile_articles_except_apparel_class',
      parentId: 'manufacture_of_other_textiles_group',
    },
    {
      label: "i18n('manufacture_of_carpets_and_rugs_class')",
      id: 'manufacture_of_carpets_and_rugs_class',
      parentId: 'manufacture_of_other_textiles_group',
    },
    {
      label: "i18n('manufacture_of_cordage_rope_twine_and_netting_class')",
      id: 'manufacture_of_cordage_rope_twine_and_netting_class',
      parentId: 'manufacture_of_other_textiles_group',
    },
    {
      label: "i18n('manufacture_of_other_textiles_nec_class')",
      id: 'manufacture_of_other_textiles_nec_class',
      parentId: 'manufacture_of_other_textiles_group',
    },
    {
      label: "i18n('manufacture_of_wearing_apparel_except_fur_apparel_class')",
      id: 'manufacture_of_wearing_apparel_except_fur_apparel_class',
      parentId: 'manufacture_of_wearing_apparel_except_fur_apparel_group',
    },
    {
      label: "i18n('manufacture_of_articles_of_fur_class')",
      id: 'manufacture_of_articles_of_fur_class',
      parentId: 'manufacture_of_articles_of_fur_group',
    },
    {
      label: "i18n('manufacture_of_knitted_and_crocheted_apparel_class')",
      id: 'manufacture_of_knitted_and_crocheted_apparel_class',
      parentId: 'manufacture_of_knitted_and_crocheted_apparel_group',
    },
    {
      label:
        "i18n('tanning_and_dressing_of_leather_dressing_and_dyeing_of_fur_class')",
      id: 'tanning_and_dressing_of_leather_dressing_and_dyeing_of_fur_class',
      parentId:
        'tanning_and_dressing_of_leather_manufacture_of_luggage_handbags_saddlery_and_harness_dressing_and_dyeing_of_fur_group',
    },
    {
      label:
        "i18n('manufacture_of_luggage_handbags_and_the_like_saddlery_and_harness_class')",
      id:
        'manufacture_of_luggage_handbags_and_the_like_saddlery_and_harness_class',
      parentId:
        'tanning_and_dressing_of_leather_manufacture_of_luggage_handbags_saddlery_and_harness_dressing_and_dyeing_of_fur_group',
    },
    {
      label: "i18n('manufacture_of_footwear_class')",
      id: 'manufacture_of_footwear_class',
      parentId: 'manufacture_of_footwear_group',
    },
    {
      label: "i18n('sawmilling_and_planing_of_wood_class')",
      id: 'sawmilling_and_planing_of_wood_class',
      parentId: 'sawmilling_and_planing_of_wood_group',
    },
    {
      label: "i18n('manufacture_of_veneer_sheets_and_wood_based_panels_class')",
      id: 'manufacture_of_veneer_sheets_and_wood_based_panels_class',
      parentId:
        'manufacture_of_products_of_wood_cork_straw_and_plaiting_materials_group',
    },
    {
      label: "i18n('manufacture_of_builders_carpentry_and_joinery_class')",
      id: 'manufacture_of_builders_carpentry_and_joinery_class',
      parentId:
        'manufacture_of_products_of_wood_cork_straw_and_plaiting_materials_group',
    },
    {
      label: "i18n('manufacture_of_wooden_containers_class')",
      id: 'manufacture_of_wooden_containers_class',
      parentId:
        'manufacture_of_products_of_wood_cork_straw_and_plaiting_materials_group',
    },
    {
      label:
        "i18n('manufacture_of_other_products_of_wood_manufacture_of_articles_of_cork_straw_and_plaiting_materials_class')",
      id:
        'manufacture_of_other_products_of_wood_manufacture_of_articles_of_cork_straw_and_plaiting_materials_class',
      parentId:
        'manufacture_of_products_of_wood_cork_straw_and_plaiting_materials_group',
    },
    {
      label: "i18n('manufacture_of_pulp_paper_and_paperboard_class')",
      id: 'manufacture_of_pulp_paper_and_paperboard_class',
      parentId: 'manufacture_of_paper_and_paper_products_group',
    },
    {
      label:
        "i18n('manufacture_of_corrugated_paper_and_paperboard_and_of_containers_of_paper_and_paperboard_class')",
      id:
        'manufacture_of_corrugated_paper_and_paperboard_and_of_containers_of_paper_and_paperboard_class',
      parentId: 'manufacture_of_paper_and_paper_products_group',
    },
    {
      label:
        "i18n('manufacture_of_other_articles_of_paper_and_paperboard_class')",
      id: 'manufacture_of_other_articles_of_paper_and_paperboard_class',
      parentId: 'manufacture_of_paper_and_paper_products_group',
    },
    {
      label: "i18n('printing_class')",
      id: 'printing_class',
      parentId: 'printing_and_service_activities_related_to_printing_group',
    },
    {
      label: "i18n('service_activities_related_to_printing_class')",
      id: 'service_activities_related_to_printing_class',
      parentId: 'printing_and_service_activities_related_to_printing_group',
    },
    {
      label: "i18n('reproduction_of_recorded_media_class')",
      id: 'reproduction_of_recorded_media_class',
      parentId: 'reproduction_of_recorded_media_group',
    },
    {
      label: "i18n('manufacture_of_coke_oven_products_class')",
      id: 'manufacture_of_coke_oven_products_class',
      parentId: 'manufacture_of_coke_oven_products_group',
    },
    {
      label: "i18n('manufacture_of_refined_petroleum_products_class')",
      id: 'manufacture_of_refined_petroleum_products_class',
      parentId: 'manufacture_of_refined_petroleum_products_group',
    },
    {
      label: "i18n('manufacture_of_basic_chemicals_class')",
      id: 'manufacture_of_basic_chemicals_class',
      parentId:
        'manufacture_of_basic_chemicals_fertilizers_and_nitrogen_compounds_plastics_and_synthetic_rubber_in_primary_forms_group',
    },
    {
      label:
        "i18n('manufacture_of_plastics_and_synthetic_rubber_in_primary_forms_class')",
      id: 'manufacture_of_plastics_and_synthetic_rubber_in_primary_forms_class',
      parentId:
        'manufacture_of_basic_chemicals_fertilizers_and_nitrogen_compounds_plastics_and_synthetic_rubber_in_primary_forms_group',
    },
    {
      label:
        "i18n('manufacture_of_pesticides_and_other_agrochemical_products_class')",
      id: 'manufacture_of_pesticides_and_other_agrochemical_products_class',
      parentId: 'manufacture_of_other_chemical_products_group',
    },
    {
      label:
        "i18n('manufacture_of_paints_varnishes_and_similar_coatings_printing_ink_and_mastics_class')",
      id:
        'manufacture_of_paints_varnishes_and_similar_coatings_printing_ink_and_mastics_class',
      parentId: 'manufacture_of_other_chemical_products_group',
    },
    {
      label:
        "i18n('manufacture_of_soap_and_detergents_cleaning_and_polishing_preparations_perfumes_and_toilet_preparations_class')",
      id:
        'manufacture_of_soap_and_detergents_cleaning_and_polishing_preparations_perfumes_and_toilet_preparations_class',
      parentId: 'manufacture_of_other_chemical_products_group',
    },
    {
      label: "i18n('manufacture_of_other_chemical_products_nec_class')",
      id: 'manufacture_of_other_chemical_products_nec_class',
      parentId: 'manufacture_of_other_chemical_products_group',
    },
    {
      label: "i18n('manufacture_of_man_made_fibres_class')",
      id: 'manufacture_of_man_made_fibres_class',
      parentId: 'manufacture_of_man_made_fibres_group',
    },
    {
      label:
        "i18n('manufacture_of_pharmaceuticals_medicinal_chemical_and_botanical_products_class')",
      id:
        'manufacture_of_pharmaceuticals_medicinal_chemical_and_botanical_products_class',
      parentId:
        'manufacture_of_pharmaceuticals_medicinal_chemical_and_botanical_products_group',
    },
    {
      label:
        "i18n('manufacture_of_rubber_tyres_and_tubes_retreading_and_rebuilding_of_rubber_tyres_class')",
      id:
        'manufacture_of_rubber_tyres_and_tubes_retreading_and_rebuilding_of_rubber_tyres_class',
      parentId: 'manufacture_of_rubber_products_group',
    },
    {
      label: "i18n('manufacture_of_other_rubber_products_class')",
      id: 'manufacture_of_other_rubber_products_class',
      parentId: 'manufacture_of_rubber_products_group',
    },
    {
      label: "i18n('manufacture_of_plastics_products_class')",
      id: 'manufacture_of_plastics_products_class',
      parentId: 'manufacture_of_plastics_products_group',
    },
    {
      label: "i18n('manufacture_of_glass_and_glass_products_class')",
      id: 'manufacture_of_glass_and_glass_products_class',
      parentId: 'manufacture_of_glass_and_glass_products_group',
    },
    {
      label: "i18n('manufacture_of_refractory_products_class')",
      id: 'manufacture_of_refractory_products_class',
      parentId: 'manufacture_of_non_metallic_mineral_products_nec_group',
    },
    {
      label: "i18n('manufacture_of_clay_building_materials_class')",
      id: 'manufacture_of_clay_building_materials_class',
      parentId: 'manufacture_of_non_metallic_mineral_products_nec_group',
    },
    {
      label:
        "i18n('manufacture_of_other_porcelain_and_ceramic_products_class')",
      id: 'manufacture_of_other_porcelain_and_ceramic_products_class',
      parentId: 'manufacture_of_non_metallic_mineral_products_nec_group',
    },
    {
      label: "i18n('manufacture_of_cement_lime_and_plaster_class')",
      id: 'manufacture_of_cement_lime_and_plaster_class',
      parentId: 'manufacture_of_non_metallic_mineral_products_nec_group',
    },
    {
      label:
        "i18n('manufacture_of_articles_of_concrete_cement_and_plaster_class')",
      id: 'manufacture_of_articles_of_concrete_cement_and_plaster_class',
      parentId: 'manufacture_of_non_metallic_mineral_products_nec_group',
    },
    {
      label: "i18n('cutting_shaping_and_finishing_of_stone_class')",
      id: 'cutting_shaping_and_finishing_of_stone_class',
      parentId: 'manufacture_of_non_metallic_mineral_products_nec_group',
    },
    {
      label:
        "i18n('manufacture_of_other_non_metallic_mineral_products_nec_class')",
      id: 'manufacture_of_other_non_metallic_mineral_products_nec_class',
      parentId: 'manufacture_of_non_metallic_mineral_products_nec_group',
    },
    {
      label: "i18n('manufacture_of_basic_iron_and_steel_class')",
      id: 'manufacture_of_basic_iron_and_steel_class',
      parentId: 'manufacture_of_basic_iron_and_steel_group',
    },
    {
      label:
        "i18n('manufacture_of_basic_precious_and_other_non_ferrous_metals_class')",
      id: 'manufacture_of_basic_precious_and_other_non_ferrous_metals_class',
      parentId:
        'manufacture_of_basic_precious_and_other_non_ferrous_metals_group',
    },
    {
      label: "i18n('casting_of_iron_and_steel_class')",
      id: 'casting_of_iron_and_steel_class',
      parentId: 'casting_of_metals_group',
    },
    {
      label: "i18n('casting_of_non_ferrous_metals_class')",
      id: 'casting_of_non_ferrous_metals_class',
      parentId: 'casting_of_metals_group',
    },
    {
      label: "i18n('manufacture_of_structural_metal_products_class')",
      id: 'manufacture_of_structural_metal_products_class',
      parentId:
        'manufacture_of_structural_metal_products_tanks_reservoirs_and_steam_generators_group',
    },
    {
      label:
        "i18n('manufacture_of_tanks_reservoirs_and_containers_of_metal_class')",
      id: 'manufacture_of_tanks_reservoirs_and_containers_of_metal_class',
      parentId:
        'manufacture_of_structural_metal_products_tanks_reservoirs_and_steam_generators_group',
    },
    {
      label:
        "i18n('manufacture_of_steam_generators_except_central_heating_hot_water_boilers_class')",
      id:
        'manufacture_of_steam_generators_except_central_heating_hot_water_boilers_class',
      parentId:
        'manufacture_of_structural_metal_products_tanks_reservoirs_and_steam_generators_group',
    },
    {
      label: "i18n('manufacture_of_weapons_and_ammunition_class')",
      id: 'manufacture_of_weapons_and_ammunition_class',
      parentId: 'manufacture_of_weapons_and_ammunition_group',
    },
    {
      label:
        "i18n('forging_pressing_stamping_and_roll_forming_of_metal_powder_metallurgy_class')",
      id:
        'forging_pressing_stamping_and_roll_forming_of_metal_powder_metallurgy_class',
      parentId:
        'manufacture_of_other_fabricated_metal_products_metalworking_service_activities_group',
    },
    {
      label: "i18n('treatment_and_coating_of_metals_machining_class')",
      id: 'treatment_and_coating_of_metals_machining_class',
      parentId:
        'manufacture_of_other_fabricated_metal_products_metalworking_service_activities_group',
    },
    {
      label:
        "i18n('manufacture_of_cutlery_hand_tools_and_general_hardware_class')",
      id: 'manufacture_of_cutlery_hand_tools_and_general_hardware_class',
      parentId:
        'manufacture_of_other_fabricated_metal_products_metalworking_service_activities_group',
    },
    {
      label: "i18n('manufacture_of_other_fabricated_metal_products_nec_class')",
      id: 'manufacture_of_other_fabricated_metal_products_nec_class',
      parentId:
        'manufacture_of_other_fabricated_metal_products_metalworking_service_activities_group',
    },
    {
      label: "i18n('manufacture_of_electronic_components_and_boards_class')",
      id: 'manufacture_of_electronic_components_and_boards_class',
      parentId: 'manufacture_of_electronic_components_and_boards_group',
    },
    {
      label: "i18n('manufacture_of_computers_and_peripheral_equipment_class')",
      id: 'manufacture_of_computers_and_peripheral_equipment_class',
      parentId: 'manufacture_of_computers_and_peripheral_equipment_group',
    },
    {
      label: "i18n('manufacture_of_communication_equipment_class')",
      id: 'manufacture_of_communication_equipment_class',
      parentId: 'manufacture_of_communication_equipment_group',
    },
    {
      label: "i18n('manufacture_of_consumer_electronics_class')",
      id: 'manufacture_of_consumer_electronics_class',
      parentId: 'manufacture_of_consumer_electronics_group',
    },
    {
      label:
        "i18n('manufacture_of_measuring_testing_navigating_and_control_equipment_class')",
      id:
        'manufacture_of_measuring_testing_navigating_and_control_equipment_class',
      parentId:
        'manufacture_of_measuring_testing_navigating_and_control_equipment_watches_and_clocks_group',
    },
    {
      label: "i18n('manufacture_of_watches_and_clocks_class')",
      id: 'manufacture_of_watches_and_clocks_class',
      parentId:
        'manufacture_of_measuring_testing_navigating_and_control_equipment_watches_and_clocks_group',
    },
    {
      label:
        "i18n('manufacture_of_irradiation_electromedical_and_electrotherapeutic_equipment_class')",
      id:
        'manufacture_of_irradiation_electromedical_and_electrotherapeutic_equipment_class',
      parentId:
        'manufacture_of_irradiation_electromedical_and_electrotherapeutic_equipment_group',
    },
    {
      label:
        "i18n('manufacture_of_optical_instruments_and_photographic_equipment_class')",
      id: 'manufacture_of_optical_instruments_and_photographic_equipment_class',
      parentId:
        'manufacture_of_optical_instruments_and_photographic_equipment_group',
    },
    {
      label: "i18n('manufacture_of_magnetic_and_optical_media_class')",
      id: 'manufacture_of_magnetic_and_optical_media_class',
      parentId: 'manufacture_of_magnetic_and_optical_media_group',
    },
    {
      label:
        "i18n('manufacture_of_electric_motors_generators_transformers_and_electricity_distribution_and_control_apparatus_class')",
      id:
        'manufacture_of_electric_motors_generators_transformers_and_electricity_distribution_and_control_apparatus_class',
      parentId:
        'manufacture_of_electric_motors_generators_transformers_and_electricity_distribution_and_control_apparatus_group',
    },
    {
      label: "i18n('manufacture_of_batteries_and_accumulators_class')",
      id: 'manufacture_of_batteries_and_accumulators_class',
      parentId: 'manufacture_of_batteries_and_accumulators_group',
    },
    {
      label: "i18n('manufacture_of_fibre_optic_cables_class')",
      id: 'manufacture_of_fibre_optic_cables_class',
      parentId: 'manufacture_of_wiring_and_wiring_devices_group',
    },
    {
      label:
        "i18n('manufacture_of_other_electronic_and_electric_wires_and_cables_class')",
      id: 'manufacture_of_other_electronic_and_electric_wires_and_cables_class',
      parentId: 'manufacture_of_wiring_and_wiring_devices_group',
    },
    {
      label: "i18n('manufacture_of_wiring_devices_class')",
      id: 'manufacture_of_wiring_devices_class',
      parentId: 'manufacture_of_wiring_and_wiring_devices_group',
    },
    {
      label: "i18n('manufacture_of_electric_lighting_equipment_class')",
      id: 'manufacture_of_electric_lighting_equipment_class',
      parentId: 'manufacture_of_electric_lighting_equipment_group',
    },
    {
      label: "i18n('manufacture_of_domestic_appliances_class')",
      id: 'manufacture_of_domestic_appliances_class',
      parentId: 'manufacture_of_domestic_appliances_group',
    },
    {
      label: "i18n('manufacture_of_other_electrical_equipment_class')",
      id: 'manufacture_of_other_electrical_equipment_class',
      parentId: 'manufacture_of_other_electrical_equipment_group',
    },
    {
      label:
        "i18n('manufacture_of_engines_and_turbines_except_aircraft_vehicle_and_cycle_engines_class')",
      id:
        'manufacture_of_engines_and_turbines_except_aircraft_vehicle_and_cycle_engines_class',
      parentId: 'manufacture_of_general_purpose_machinery_group',
    },
    {
      label: "i18n('manufacture_of_fluid_power_equipment_class')",
      id: 'manufacture_of_fluid_power_equipment_class',
      parentId: 'manufacture_of_general_purpose_machinery_group',
    },
    {
      label:
        "i18n('manufacture_of_other_pumps_compressors_taps_and_valves_class')",
      id: 'manufacture_of_other_pumps_compressors_taps_and_valves_class',
      parentId: 'manufacture_of_general_purpose_machinery_group',
    },
    {
      label:
        "i18n('manufacture_of_bearings_gears_gearing_and_driving_elements_class')",
      id: 'manufacture_of_bearings_gears_gearing_and_driving_elements_class',
      parentId: 'manufacture_of_general_purpose_machinery_group',
    },
    {
      label: "i18n('manufacture_of_ovens_furnaces_and_furnace_burners_class')",
      id: 'manufacture_of_ovens_furnaces_and_furnace_burners_class',
      parentId: 'manufacture_of_general_purpose_machinery_group',
    },
    {
      label: "i18n('manufacture_of_lifting_and_handling_equipment_class')",
      id: 'manufacture_of_lifting_and_handling_equipment_class',
      parentId: 'manufacture_of_general_purpose_machinery_group',
    },
    {
      label:
        "i18n('manufacture_of_office_machinery_and_equipment_except_computers_and_peripheral_equipment_class')",
      id:
        'manufacture_of_office_machinery_and_equipment_except_computers_and_peripheral_equipment_class',
      parentId: 'manufacture_of_general_purpose_machinery_group',
    },
    {
      label: "i18n('manufacture_of_power_driven_hand_tools_class')",
      id: 'manufacture_of_power_driven_hand_tools_class',
      parentId: 'manufacture_of_general_purpose_machinery_group',
    },
    {
      label: "i18n('manufacture_of_other_general_purpose_machinery_class')",
      id: 'manufacture_of_other_general_purpose_machinery_class',
      parentId: 'manufacture_of_general_purpose_machinery_group',
    },
    {
      label: "i18n('manufacture_of_agricultural_and_forestry_machinery_class')",
      id: 'manufacture_of_agricultural_and_forestry_machinery_class',
      parentId: 'manufacture_of_special_purpose_machinery_group',
    },
    {
      label:
        "i18n('manufacture_of_metal_forming_machinery_and_machine_tools_class')",
      id: 'manufacture_of_metal_forming_machinery_and_machine_tools_class',
      parentId: 'manufacture_of_special_purpose_machinery_group',
    },
    {
      label: "i18n('manufacture_of_machinery_for_metallurgy_class')",
      id: 'manufacture_of_machinery_for_metallurgy_class',
      parentId: 'manufacture_of_special_purpose_machinery_group',
    },
    {
      label:
        "i18n('manufacture_of_machinery_for_mining_quarrying_and_construction_class')",
      id:
        'manufacture_of_machinery_for_mining_quarrying_and_construction_class',
      parentId: 'manufacture_of_special_purpose_machinery_group',
    },
    {
      label:
        "i18n('manufacture_of_machinery_for_food_beverage_and_tobacco_processing_class')",
      id:
        'manufacture_of_machinery_for_food_beverage_and_tobacco_processing_class',
      parentId: 'manufacture_of_special_purpose_machinery_group',
    },
    {
      label:
        "i18n('manufacture_of_machinery_for_textile_apparel_and_leather_production_class')",
      id:
        'manufacture_of_machinery_for_textile_apparel_and_leather_production_class',
      parentId: 'manufacture_of_special_purpose_machinery_group',
    },
    {
      label: "i18n('manufacture_of_other_special_purpose_machinery_class')",
      id: 'manufacture_of_other_special_purpose_machinery_class',
      parentId: 'manufacture_of_special_purpose_machinery_group',
    },
    {
      label: "i18n('manufacture_of_motor_vehicles_class')",
      id: 'manufacture_of_motor_vehicles_class',
      parentId: 'manufacture_of_motor_vehicles_group',
    },
    {
      label:
        "i18n('manufacture_of_bodies_coachwork_for_motor_vehicles_manufacture_of_trailers_and_semi_trailers_class')",
      id:
        'manufacture_of_bodies_coachwork_for_motor_vehicles_manufacture_of_trailers_and_semi_trailers_class',
      parentId:
        'manufacture_of_bodies_coachwork_for_motor_vehicles_manufacture_of_trailers_and_semi_trailers_group',
    },
    {
      label:
        "i18n('manufacture_of_parts_and_accessories_for_motor_vehicles(except_computers_and_peripheral_equipment)_class')",
      id:
        'manufacture_of_office_machinery_and_equipment_(except_computers_and_peripheral_equipmentmanufacture_of_parts_and_accessories_for_motor_vehicles_class',
      parentId: 'manufacture_of_parts_and_accessories_for_motor_vehicles_group',
    },
    {
      label: "i18n('building_of_ships_and_floating_structures_class')",
      id: 'building_of_ships_and_floating_structures_class',
      parentId: 'building_of_ships_and_boats_group',
    },
    {
      label: "i18n('building_of_pleasure_and_sporting_boats_class')",
      id: 'building_of_pleasure_and_sporting_boats_class',
      parentId: 'building_of_ships_and_boats_group',
    },
    {
      label:
        "i18n('manufacture_of_railway_locomotives_and_rolling_stock_class')",
      id: 'manufacture_of_railway_locomotives_and_rolling_stock_class',
      parentId: 'manufacture_of_railway_locomotives_and_rolling_stock_group',
    },
    {
      label:
        "i18n('manufacture_of_air_and_spacecraft_and_related_machinery_class')",
      id: 'manufacture_of_air_and_spacecraft_and_related_machinery_class',
      parentId: 'manufacture_of_air_and_spacecraft_and_related_machinery_group',
    },
    {
      label: "i18n('manufacture_of_military_fighting_vehicles_class')",
      id: 'manufacture_of_military_fighting_vehicles_class',
      parentId: 'manufacture_of_military_fighting_vehicles_group',
    },
    {
      label: "i18n('manufacture_of_motorcycles_class')",
      id: 'manufacture_of_motorcycles_class',
      parentId: 'manufacture_of_transport_equipment_nec_group',
    },
    {
      label: "i18n('manufacture_of_bicycles_and_invalid_carriages_class')",
      id: 'manufacture_of_bicycles_and_invalid_carriages_class',
      parentId: 'manufacture_of_transport_equipment_nec_group',
    },
    {
      label: "i18n('manufacture_of_other_transport_equipment_nec_class')",
      id: 'manufacture_of_other_transport_equipment_nec_class',
      parentId: 'manufacture_of_transport_equipment_nec_group',
    },
    {
      label: "i18n('manufacture_of_furniture_class')",
      id: 'manufacture_of_furniture_class',
      parentId: 'manufacture_of_furniture_group',
    },
    {
      label: "i18n('manufacture_of_jewellery_and_related_articles_class')",
      id: 'manufacture_of_jewellery_and_related_articles_class',
      parentId:
        'manufacture_of_jewellery_bijouterie_and_related_articles_group',
    },
    {
      label:
        "i18n('manufacture_of_imitation_jewellery_and_related_articles_class')",
      id: 'manufacture_of_imitation_jewellery_and_related_articles_class',
      parentId:
        'manufacture_of_jewellery_bijouterie_and_related_articles_group',
    },
    {
      label: "i18n('manufacture_of_musical_instruments_class')",
      id: 'manufacture_of_musical_instruments_class',
      parentId: 'manufacture_of_musical_instruments_group',
    },
    {
      label: "i18n('manufacture_of_sports_goods_class')",
      id: 'manufacture_of_sports_goods_class',
      parentId: 'manufacture_of_sports_goods_group',
    },
    {
      label: "i18n('manufacture_of_games_and_toys_class')",
      id: 'manufacture_of_games_and_toys_class',
      parentId: 'manufacture_of_games_and_toys_group',
    },
    {
      label:
        "i18n('manufacture_of_medical_and_dental_instruments_and_supplies(coachwork)_for_motor_vehicles_class')",
      id:
        'manufacture_of_bodies_(coachwork)manufacture_of_medical_and_dental_instruments_and_supplies_class',
      parentId:
        'manufacture_of_medical_and_dental_instruments_and_supplies_group',
    },
    {
      label: "i18n('other_manufacturing_nec_class')",
      id: 'other_manufacturing_nec_class',
      parentId: 'other_manufacturing_nec_group',
    },
    {
      label: "i18n('wholesale_on_a_fee_or_contract_basis_class')",
      id: 'wholesale_on_a_fee_or_contract_basis_class',
      parentId: 'wholesale_on_a_fee_or_contract_basis_group',
    },
    {
      label:
        "i18n('electric_power_generation_transmission_and_distribution_class')",
      id: 'electric_power_generation_transmission_and_distribution_class',
      parentId: 'electric_power_generation_transmission_and_distribution_group',
    },
    {
      label: "i18n('steam_and_air_conditioning_supply_class')",
      id: 'steam_and_air_conditioning_supply_class',
      parentId: 'steam_and_air_conditioning_supply_group',
    },
    {
      label: "i18n('water_collection_treatment_and_supply_class')",
      id: 'water_collection_treatment_and_supply_class',
      parentId: 'water_collection_treatment_and_supply_group',
    },
    {
      label: "i18n('treatment_and_disposal_of_non_hazardous_waste_class')",
      id: 'treatment_and_disposal_of_non_hazardous_waste_class',
      parentId: 'waste_treatment_and_disposal_group',
    },
    {
      label: "i18n('materials_recovery_class')",
      id: 'materials_recovery_class',
      parentId: 'materials_recovery_group',
    },
    {
      label:
        "i18n('research_and_experimental_development_on_natural_sciences_and_engineering_class')",
      id:
        'research_and_experimental_development_on_natural_sciences_and_engineering_class',
      parentId:
        'research_and_experimental_development_on_natural_sciences_and_engineering_group',
    },
  ].filter(
    (obj: any) =>
      parentId === 'All' ||
      obj.parentId === parentId ||
      obj.parentId === 'mandatory'
  );
};

const getBranches = (parentId: string) => {
  return [
    {
      label: "i18n('all')",
      id: 'All',
      parentId: 'mandatory',
    },
    {
      label: "i18n('plant_propagation_branch')",
      id: 'plant_propagation_branch',
      parentId: 'plant_propagation_class',
    },
    {
      label:
        "i18n('support_activities_for_petroleum_and_natural_gas_extraction_branch')",
      id: 'support_activities_for_petroleum_and_natural_gas_extraction_branch',
      parentId:
        'support_activities_for_petroleum_and_natural_gas_extraction_class',
    },
    {
      label: "i18n('processing_and_preserving_of_meat_branch')",
      id: 'processing_and_preserving_of_meat_branch',
      parentId: 'processing_and_preserving_of_meat_class',
    },
    {
      label:
        "i18n('processing_and_preserving_of_fish_crustaceans_and_molluscs_branch')",
      id: 'processing_and_preserving_of_fish_crustaceans_and_molluscs_branch',
      parentId:
        'processing_and_preserving_of_fish_crustaceans_and_molluscs_class',
    },
    {
      label: "i18n('processing_and_preserving_of_fruit_and_vegetables_branch')",
      id: 'processing_and_preserving_of_fruit_and_vegetables_branch',
      parentId: 'processing_and_preserving_of_fruit_and_vegetables_class',
    },
    {
      label: "i18n('manufacture_of_vegetable__oils_branch')",
      id: 'manufacture_of_vegetable__oils_branch',
      parentId: 'manufacture_of_vegetable_and_animal_oils_and_fats_class',
    },
    {
      label: "i18n('manufacture_of_oils_and_animal_fats_and_refined_branch')",
      id: 'manufacture_of_oils_and_animal_fats_and_refined_branch',
      parentId: 'manufacture_of_vegetable_and_animal_oils_and_fats_class',
    },
    {
      label:
        "i18n('manufacture_of_other_vegetable_and_animal_oils_and_fats_branch')",
      id: 'manufacture_of_other_vegetable_and_animal_oils_and_fats_branch',
      parentId: 'manufacture_of_vegetable_and_animal_oils_and_fats_class',
    },
    {
      label: "i18n('manufacture_of_dairy_products_branch')",
      id: 'manufacture_of_dairy_products_branch',
      parentId: 'manufacture_of_dairy_products_class',
    },
    {
      label: "i18n('manufacture_of_grain_mill_products_branch')",
      id: 'manufacture_of_grain_mill_products_branch',
      parentId: 'manufacture_of_grain_mill_products_class',
    },
    {
      label: "i18n('manufacture_of_starches_and_starch_products_branch')",
      id: 'manufacture_of_starches_and_starch_products_branch',
      parentId: 'manufacture_of_starches_and_starch_products_class',
    },
    {
      label: "i18n('manufacture_of_bakery_products_branch')",
      id: 'manufacture_of_bakery_products_branch',
      parentId: 'manufacture_of_bakery_products_class',
    },
    {
      label: "i18n('manufacture_of_sugar_branch')",
      id: 'manufacture_of_sugar_branch',
      parentId: 'manufacture_of_sugar_class',
    },
    {
      label: "i18n('manufacture_of_cocoa_products_branch')",
      id: 'manufacture_of_cocoa_products_branch',
      parentId: 'manufacture_of_cocoa_chocolate_and_sugar_confectionery_class',
    },
    {
      label: "i18n('manufacture_of_sugar_confectionery_branch')",
      id: 'manufacture_of_sugar_confectionery_branch',
      parentId: 'manufacture_of_cocoa_chocolate_and_sugar_confectionery_class',
    },
    {
      label:
        "i18n('manufacture_of_macaroni_noodles_couscous_and_similar_farinaceous_products_branch')",
      id:
        'manufacture_of_macaroni_noodles_couscous_and_similar_farinaceous_products_branch',
      parentId:
        'manufacture_of_macaroni_noodles_couscous_and_similar_farinaceous_products_class',
    },
    {
      label: "i18n('manufacture_of_prepared_meals_and_dishes_branch')",
      id: 'manufacture_of_prepared_meals_and_dishes_branch',
      parentId: 'manufacture_of_prepared_meals_and_dishes_class',
    },
    {
      label: "i18n('manufacture_of_other_food_products_nec_branch')",
      id: 'manufacture_of_other_food_products_nec_branch',
      parentId: 'manufacture_of_other_food_products_nec_class',
    },
    {
      label: "i18n('manufacture_of_prepared_animal_feeds_branch')",
      id: 'manufacture_of_prepared_animal_feeds_branch',
      parentId: 'manufacture_of_prepared_animal_feeds_class',
    },
    {
      label: "i18n('manufacture_of_non_alcoholic__wine_branch')",
      id: 'manufacture_of_non_alcoholic__wine_branch',
      parentId: 'manufacture_of_wines_class',
    },
    {
      label: "i18n('manufacture_of_malt_liquors_and_malt_branch')",
      id: 'manufacture_of_malt_liquors_and_malt_branch',
      parentId: 'manufacture_of_malt_liquors_and_malt_class',
    },
    {
      label: "i18n('manufacture_of_soft_drinks_branch')",
      id: 'manufacture_of_soft_drinks_branch',
      parentId:
        'manufacture_of_soft_drinks_production_of_mineral_waters_and_other_bottled_waters_class',
    },
    {
      label:
        "i18n('manufacture_of_soft_drinks_and_production_of_mineral_water_branch')",
      id: 'manufacture_of_soft_drinks_and_production_of_mineral_water_branch',
      parentId:
        'manufacture_of_soft_drinks_production_of_mineral_waters_and_other_bottled_waters_class',
    },
    {
      label: "i18n('manufacture_of_refreshments_branch')",
      id: 'manufacture_of_refreshments_branch',
      parentId:
        'manufacture_of_soft_drinks_production_of_mineral_waters_and_other_bottled_waters_class',
    },
    {
      label: "i18n('preparation_and_spinning_of_textile_fibres_branch')",
      id: 'preparation_and_spinning_of_textile_fibres_branch',
      parentId: 'preparation_and_spinning_of_textile_fibres_class',
    },
    {
      label: "i18n('weaving_of_textiles_branch')",
      id: 'weaving_of_textiles_branch',
      parentId: 'weaving_of_textiles_class',
    },
    {
      label: "i18n('finishing_of_textiles_branch')",
      id: 'finishing_of_textiles_branch',
      parentId: 'finishing_of_textiles_class',
    },
    {
      label: "i18n('manufacture_of_knitted_and_crocheted_fabrics_branch')",
      id: 'manufacture_of_knitted_and_crocheted_fabrics_branch',
      parentId: 'manufacture_of_knitted_and_crocheted_fabrics_class',
    },
    {
      label:
        "i18n('manufacture_of_made_up_textile_articles_except_apparel_branch')",
      id: 'manufacture_of_made_up_textile_articles_except_apparel_branch',
      parentId: 'manufacture_of_made_up_textile_articles_except_apparel_class',
    },
    {
      label: "i18n('manufacture_of_carpets_and_rugs_branch')",
      id: 'manufacture_of_carpets_and_rugs_branch',
      parentId: 'manufacture_of_carpets_and_rugs_class',
    },
    {
      label: "i18n('manufacture_of_cordage_rope_twine_and_netting_branch')",
      id: 'manufacture_of_cordage_rope_twine_and_netting_branch',
      parentId: 'manufacture_of_cordage_rope_twine_and_netting_class',
    },
    {
      label: "i18n('manufacture_of_other_textiles_nec_branch')",
      id: 'manufacture_of_other_textiles_nec_branch',
      parentId: 'manufacture_of_other_textiles_nec_class',
    },
    {
      label: "i18n('manufacture_of_wearing_apparel_branch')",
      id: 'manufacture_of_wearing_apparel_branch',
      parentId: 'manufacture_of_wearing_apparel_except_fur_apparel_class',
    },
    {
      label: "i18n('tailoring_and_sewing_of_wearing_apparel_branch')",
      id: 'tailoring_and_sewing_of_wearing_apparel_branch',
      parentId: 'manufacture_of_wearing_apparel_except_fur_apparel_class',
    },
    {
      label: "i18n('manufacture_of_articles_of_fur_branch')",
      id: 'manufacture_of_articles_of_fur_branch',
      parentId: 'manufacture_of_articles_of_fur_class',
    },
    {
      label: "i18n('manufacture_of_knitted_and_crocheted_apparel_branch')",
      id: 'manufacture_of_knitted_and_crocheted_apparel_branch',
      parentId: 'manufacture_of_knitted_and_crocheted_apparel_class',
    },
    {
      label:
        "i18n('tanning_and_dressing_of_leather_dressing_and_dyeing_of_fur_branch')",
      id: 'tanning_and_dressing_of_leather_dressing_and_dyeing_of_fur_branch',
      parentId:
        'tanning_and_dressing_of_leather_dressing_and_dyeing_of_fur_class',
    },
    {
      label:
        "i18n('manufacture_of_luggage_handbags_and_the_like_saddlery_and_harness_branch')",
      id:
        'manufacture_of_luggage_handbags_and_the_like_saddlery_and_harness_branch',
      parentId:
        'manufacture_of_luggage_handbags_and_the_like_saddlery_and_harness_class',
    },
    {
      label: "i18n('manufacture_of_footwear_branch')",
      id: 'manufacture_of_footwear_branch',
      parentId: 'manufacture_of_footwear_class',
    },
    {
      label: "i18n('sawmilling_and_planing_of_wood_branch')",
      id: 'sawmilling_and_planing_of_wood_branch',
      parentId: 'sawmilling_and_planing_of_wood_class',
    },
    {
      label:
        "i18n('manufacture_of_veneer_sheets_and_wood_based_panels_branch')",
      id: 'manufacture_of_veneer_sheets_and_wood_based_panels_branch',
      parentId: 'manufacture_of_veneer_sheets_and_wood_based_panels_class',
    },
    {
      label: "i18n('manufacture_of_builders_carpentry_and_joinery_branch')",
      id: 'manufacture_of_builders_carpentry_and_joinery_branch',
      parentId: 'manufacture_of_builders_carpentry_and_joinery_class',
    },
    {
      label: "i18n('manufacture_of_wooden_containers_branch')",
      id: 'manufacture_of_wooden_containers_branch',
      parentId: 'manufacture_of_wooden_containers_class',
    },
    {
      label:
        "i18n('manufacture_of_articles_of_cork_straw_and_plaiting_materials_branch')",
      id: 'manufacture_of_articles_of_cork_straw_and_plaiting_materials_branch',
      parentId:
        'manufacture_of_other_products_of_wood_manufacture_of_articles_of_cork_straw_and_plaiting_materials_class',
    },
    {
      label: "i18n('manufacture_of_other_products_of_wood_branch')",
      id: 'manufacture_of_other_products_of_wood_branch',
      parentId:
        'manufacture_of_other_products_of_wood_manufacture_of_articles_of_cork_straw_and_plaiting_materials_class',
    },
    {
      label: "i18n('manufacture_of_pulp_paper_and_paperboard_branch')",
      id: 'manufacture_of_pulp_paper_and_paperboard_branch',
      parentId: 'manufacture_of_pulp_paper_and_paperboard_class',
    },
    {
      label:
        "i18n('manufacture_of_corrugated_paper_and_paperboard_and_of_containers_of_paper_and_paperboard_branch')",
      id:
        'manufacture_of_corrugated_paper_and_paperboard_and_of_containers_of_paper_and_paperboard_branch',
      parentId:
        'manufacture_of_corrugated_paper_and_paperboard_and_of_containers_of_paper_and_paperboard_class',
    },
    {
      label:
        "i18n('manufacture_of_other_articles_of_paper_and_paperboard_branch')",
      id: 'manufacture_of_other_articles_of_paper_and_paperboard_branch',
      parentId: 'manufacture_of_other_articles_of_paper_and_paperboard_class',
    },
    {
      label: "i18n('printing_branch')",
      id: 'printing_branch',
      parentId: 'printing_class',
    },
    {
      label: "i18n('service_activities_related_to_printing_branch')",
      id: 'service_activities_related_to_printing_branch',
      parentId: 'service_activities_related_to_printing_class',
    },
    {
      label: "i18n('reproduction_of_recorded_media_branch')",
      id: 'reproduction_of_recorded_media_branch',
      parentId: 'reproduction_of_recorded_media_class',
    },
    {
      label: "i18n('manufacture_of_coke_oven_products_branch')",
      id: 'manufacture_of_coke_oven_products_branch',
      parentId: 'manufacture_of_coke_oven_products_class',
    },
    {
      label: "i18n('manufacture_of_refined_petroleum_products_branch')",
      id: 'manufacture_of_refined_petroleum_products_branch',
      parentId: 'manufacture_of_refined_petroleum_products_class',
    },
    {
      label: "i18n('manufacture_of_basic_chemicals_branch')",
      id: 'manufacture_of_basic_chemicals_branch',
      parentId: 'manufacture_of_basic_chemicals_class',
    },
    {
      label:
        "i18n('manufacture_of_plastics_and_synthetic_rubber_in_primary_forms_branch')",
      id:
        'manufacture_of_plastics_and_synthetic_rubber_in_primary_forms_branch',
      parentId:
        'manufacture_of_plastics_and_synthetic_rubber_in_primary_forms_class',
    },
    {
      label:
        "i18n('manufacture_of_pesticides_and_other_agrochemical_products_branch')",
      id: 'manufacture_of_pesticides_and_other_agrochemical_products_branch',
      parentId:
        'manufacture_of_pesticides_and_other_agrochemical_products_class',
    },
    {
      label:
        "i18n('manufacture_of_paints_varnishes_and_similar_coatings_printing_ink_and_mastics_branch')",
      id:
        'manufacture_of_paints_varnishes_and_similar_coatings_printing_ink_and_mastics_branch',
      parentId:
        'manufacture_of_paints_varnishes_and_similar_coatings_printing_ink_and_mastics_class',
    },
    {
      label:
        "i18n('manufacture_of_soap_and_detergents_cleaning_and_polishing_preparations_perfumes_and_toilet_preparations_branch')",
      id:
        'manufacture_of_soap_and_detergents_cleaning_and_polishing_preparations_perfumes_and_toilet_preparations_branch',
      parentId:
        'manufacture_of_soap_and_detergents_cleaning_and_polishing_preparations_perfumes_and_toilet_preparations_class',
    },
    {
      label: "i18n('manufacture_of_other_chemical_products_nec_branch')",
      id: 'manufacture_of_other_chemical_products_nec_branch',
      parentId: 'manufacture_of_other_chemical_products_nec_class',
    },
    {
      label: "i18n('manufacture_of_man_made_fibres_branch')",
      id: 'manufacture_of_man_made_fibres_branch',
      parentId: 'manufacture_of_man_made_fibres_class',
    },
    {
      label:
        "i18n('manufacture_of_pharmaceutical_products_and_chemical_plant_branch')",
      id: 'manufacture_of_pharmaceutical_products_and_chemical_plant_branch',
      parentId:
        'manufacture_of_pharmaceuticals_medicinal_chemical_and_botanical_products_class',
    },
    {
      label: "i18n('manufacture_of_pharmaceuticals_branch')",
      id: 'manufacture_of_pharmaceuticals_branch',
      parentId:
        'manufacture_of_pharmaceuticals_medicinal_chemical_and_botanical_products_class',
    },
    {
      label:
        "i18n('manufacture_of_rubber_tyres_and_tubes_retreading_and_rebuilding_of_rubber_tyres_branch')",
      id:
        'manufacture_of_rubber_tyres_and_tubes_retreading_and_rebuilding_of_rubber_tyres_branch',
      parentId:
        'manufacture_of_rubber_tyres_and_tubes_retreading_and_rebuilding_of_rubber_tyres_class',
    },
    {
      label: "i18n('manufacture_of_other_rubber_products_branch')",
      id: 'manufacture_of_other_rubber_products_branch',
      parentId: 'manufacture_of_other_rubber_products_class',
    },
    {
      label: "i18n('manufacture_of_plastics_products_branch')",
      id: 'manufacture_of_plastics_products_branch',
      parentId: 'manufacture_of_plastics_products_class',
    },
    {
      label: "i18n('manufacture_of_glass_and_glass_products_branch')",
      id: 'manufacture_of_glass_and_glass_products_branch',
      parentId: 'manufacture_of_glass_and_glass_products_class',
    },
    {
      label: "i18n('manufacture_of_refractory_products_branch')",
      id: 'manufacture_of_refractory_products_branch',
      parentId: 'manufacture_of_refractory_products_class',
    },
    {
      label: "i18n('manufacture_of_clay_building_materials_branch')",
      id: 'manufacture_of_clay_building_materials_branch',
      parentId: 'manufacture_of_clay_building_materials_class',
    },
    {
      label:
        "i18n('manufacture_of_other_porcelain_and_ceramic_products_branch')",
      id: 'manufacture_of_other_porcelain_and_ceramic_products_branch',
      parentId: 'manufacture_of_other_porcelain_and_ceramic_products_class',
    },
    {
      label: "i18n('manufacture_of_cement_lime_and_plaster_branch')",
      id: 'manufacture_of_cement_lime_and_plaster_branch',
      parentId: 'manufacture_of_cement_lime_and_plaster_class',
    },
    {
      label:
        "i18n('manufacture_of_articles_of_concrete_cement_and_plaster_branch')",
      id: 'manufacture_of_articles_of_concrete_cement_and_plaster_branch',
      parentId: 'manufacture_of_articles_of_concrete_cement_and_plaster_class',
    },
    {
      label: "i18n('cutting_shaping_and_finishing_of_stone_branch')",
      id: 'cutting_shaping_and_finishing_of_stone_branch',
      parentId: 'cutting_shaping_and_finishing_of_stone_class',
    },
    {
      label:
        "i18n('manufacture_of_other_non_metallic_mineral_products_nec_branch')",
      id: 'manufacture_of_other_non_metallic_mineral_products_nec_branch',
      parentId: 'manufacture_of_other_non_metallic_mineral_products_nec_class',
    },
    {
      label: "i18n('primary_iron_products_manufacturing_branch')",
      id: 'primary_iron_products_manufacturing_branch',
      parentId: 'manufacture_of_basic_iron_and_steel_class',
    },
    {
      label: "i18n('steel_bars_manufacturing_and_supplies_branch')",
      id: 'steel_bars_manufacturing_and_supplies_branch',
      parentId: 'manufacture_of_basic_iron_and_steel_class',
    },
    {
      label:
        "i18n('manufacture_of_basic_precious_and_other_non_ferrous_metals_branch')",
      id: 'manufacture_of_basic_precious_and_other_non_ferrous_metals_branch',
      parentId:
        'manufacture_of_basic_precious_and_other_non_ferrous_metals_class',
    },
    {
      label: "i18n('casting_of_iron_and_steel_branch')",
      id: 'casting_of_iron_and_steel_branch',
      parentId: 'casting_of_iron_and_steel_class',
    },
    {
      label: "i18n('casting_of_non_ferrous_metals_branch')",
      id: 'casting_of_non_ferrous_metals_branch',
      parentId: 'casting_of_non_ferrous_metals_class',
    },
    {
      label: "i18n('manufacture_of_structural_metal_products_branch')",
      id: 'manufacture_of_structural_metal_products_branch',
      parentId: 'manufacture_of_structural_metal_products_class',
    },
    {
      label:
        "i18n('manufacture_of_tanks_reservoirs_and_containers_of_metal_branch')",
      id: 'manufacture_of_tanks_reservoirs_and_containers_of_metal_branch',
      parentId: 'manufacture_of_tanks_reservoirs_and_containers_of_metal_class',
    },
    {
      label:
        "i18n('manufacture_of_steam_generators_except_central_heating_hot_water_boilers_branch')",
      id:
        'manufacture_of_steam_generators_except_central_heating_hot_water_boilers_branch',
      parentId:
        'manufacture_of_steam_generators_except_central_heating_hot_water_boilers_class',
    },
    {
      label: "i18n('manufacture_of_weapons_and_ammunition_branch')",
      id: 'manufacture_of_weapons_and_ammunition_branch',
      parentId: 'manufacture_of_weapons_and_ammunition_class',
    },
    {
      label:
        "i18n('forging_pressing_stamping_and_roll_forming_of_metal_powder_metallurgy_branch')",
      id:
        'forging_pressing_stamping_and_roll_forming_of_metal_powder_metallurgy_branch',
      parentId:
        'forging_pressing_stamping_and_roll_forming_of_metal_powder_metallurgy_class',
    },
    {
      label: "i18n('treatment_and_coating_of_metals_machining_branch')",
      id: 'treatment_and_coating_of_metals_machining_branch',
      parentId: 'treatment_and_coating_of_metals_machining_class',
    },
    {
      label:
        "i18n('manufacture_of_cutlery_hand_tools_and_general_hardware_branch')",
      id: 'manufacture_of_cutlery_hand_tools_and_general_hardware_branch',
      parentId: 'manufacture_of_cutlery_hand_tools_and_general_hardware_class',
    },
    {
      label:
        "i18n('manufacture_of_other_fabricated_metal_products_nec_branch')",
      id: 'manufacture_of_other_fabricated_metal_products_nec_branch',
      parentId: 'manufacture_of_other_fabricated_metal_products_nec_class',
    },
    {
      label: "i18n('metal_sheets_and_plates_manufacturing_branch')",
      id: 'metal_sheets_and_plates_manufacturing_branch',
      parentId: 'manufacture_of_other_fabricated_metal_products_nec_class',
    },
    {
      label: "i18n('screwing_tools_and_requisites_manufacturing_branch')",
      id: 'screwing_tools_and_requisites_manufacturing_branch',
      parentId: 'manufacture_of_other_fabricated_metal_products_nec_class',
    },
    {
      label: "i18n('barbed_wires_chains_and_mesh_manufacturing_branch')",
      id: 'barbed_wires_chains_and_mesh_manufacturing_branch',
      parentId: 'manufacture_of_other_fabricated_metal_products_nec_class',
    },
    {
      label: "i18n('manufacture_of_electronic_components_and_boards_branch')",
      id: 'manufacture_of_electronic_components_and_boards_branch',
      parentId: 'manufacture_of_electronic_components_and_boards_class',
    },
    {
      label: "i18n('manufacture_of_computers_and_peripheral_equipment_branch')",
      id: 'manufacture_of_computers_and_peripheral_equipment_branch',
      parentId: 'manufacture_of_computers_and_peripheral_equipment_class',
    },
    {
      label: "i18n('manufacture_of_communication_equipment_branch')",
      id: 'manufacture_of_communication_equipment_branch',
      parentId: 'manufacture_of_communication_equipment_class',
    },
    {
      label: "i18n('manufacture_of_consumer_electronics_branch')",
      id: 'manufacture_of_consumer_electronics_branch',
      parentId: 'manufacture_of_consumer_electronics_class',
    },
    {
      label:
        "i18n('manufacture_of_measuring_testing_navigating_and_control_equipment_branch')",
      id:
        'manufacture_of_measuring_testing_navigating_and_control_equipment_branch',
      parentId:
        'manufacture_of_measuring_testing_navigating_and_control_equipment_class',
    },
    {
      label: "i18n('manufacture_of_watches_and_clocks_branch')",
      id: 'manufacture_of_watches_and_clocks_branch',
      parentId: 'manufacture_of_watches_and_clocks_class',
    },
    {
      label:
        "i18n('manufacture_of_irradiation_electromedical_and_electrotherapeutic_equipment_branch')",
      id:
        'manufacture_of_irradiation_electromedical_and_electrotherapeutic_equipment_branch',
      parentId:
        'manufacture_of_irradiation_electromedical_and_electrotherapeutic_equipment_class',
    },
    {
      label:
        "i18n('manufacture_of_optical_instruments_and_photographic_equipment_branch')",
      id:
        'manufacture_of_optical_instruments_and_photographic_equipment_branch',
      parentId:
        'manufacture_of_optical_instruments_and_photographic_equipment_class',
    },
    {
      label: "i18n('manufacture_of_magnetic_and_optical_media_branch')",
      id: 'manufacture_of_magnetic_and_optical_media_branch',
      parentId: 'manufacture_of_magnetic_and_optical_media_class',
    },
    {
      label:
        "i18n('manufacture_of_electric_motors_generators_transformers_and_electricity_distribution_and_control_apparatus_branch')",
      id:
        'manufacture_of_electric_motors_generators_transformers_and_electricity_distribution_and_control_apparatus_branch',
      parentId:
        'manufacture_of_electric_motors_generators_transformers_and_electricity_distribution_and_control_apparatus_class',
    },
    {
      label: "i18n('manufacture_of_batteries_and_accumulators_branch')",
      id: 'manufacture_of_batteries_and_accumulators_branch',
      parentId: 'manufacture_of_batteries_and_accumulators_class',
    },
    {
      label: "i18n('manufacture_of_fibre_optic_cables_branch')",
      id: 'manufacture_of_fibre_optic_cables_branch',
      parentId: 'manufacture_of_fibre_optic_cables_class',
    },
    {
      label:
        "i18n('manufacture_of_other_electronic_and_electric_wires_and_cables_branch')",
      id:
        'manufacture_of_other_electronic_and_electric_wires_and_cables_branch',
      parentId:
        'manufacture_of_other_electronic_and_electric_wires_and_cables_class',
    },
    {
      label: "i18n('manufacture_of_wiring_devices_branch')",
      id: 'manufacture_of_wiring_devices_branch',
      parentId: 'manufacture_of_wiring_devices_class',
    },
    {
      label: "i18n('manufacture_of_electric_lighting_equipment_branch')",
      id: 'manufacture_of_electric_lighting_equipment_branch',
      parentId: 'manufacture_of_electric_lighting_equipment_class',
    },
    {
      label: "i18n('manufacture_of_domestic_appliances_branch')",
      id: 'manufacture_of_domestic_appliances_branch',
      parentId: 'manufacture_of_domestic_appliances_class',
    },
    {
      label: "i18n('manufacture_of_other_electrical_equipment_branch')",
      id: 'manufacture_of_other_electrical_equipment_branch',
      parentId: 'manufacture_of_other_electrical_equipment_class',
    },
    {
      label:
        "i18n('manufacture_of_engines_and_turbines_except_aircraft_vehicle_and_cycle_engines_branch')",
      id:
        'manufacture_of_engines_and_turbines_except_aircraft_vehicle_and_cycle_engines_branch',
      parentId:
        'manufacture_of_engines_and_turbines_except_aircraft_vehicle_and_cycle_engines_class',
    },
    {
      label: "i18n('manufacture_of_fluid_power_equipment_branch')",
      id: 'manufacture_of_fluid_power_equipment_branch',
      parentId: 'manufacture_of_fluid_power_equipment_class',
    },
    {
      label:
        "i18n('manufacture_of_other_pumps_compressors_taps_and_valves_branch')",
      id: 'manufacture_of_other_pumps_compressors_taps_and_valves_branch',
      parentId: 'manufacture_of_other_pumps_compressors_taps_and_valves_class',
    },
    {
      label:
        "i18n('manufacture_of_bearings_gears_gearing_and_driving_elements_branch')",
      id: 'manufacture_of_bearings_gears_gearing_and_driving_elements_branch',
      parentId:
        'manufacture_of_bearings_gears_gearing_and_driving_elements_class',
    },
    {
      label: "i18n('manufacture_of_ovens_furnaces_and_furnace_burners_branch')",
      id: 'manufacture_of_ovens_furnaces_and_furnace_burners_branch',
      parentId: 'manufacture_of_ovens_furnaces_and_furnace_burners_class',
    },
    {
      label: "i18n('manufacture_of_lifting_and_handling_equipment_branch')",
      id: 'manufacture_of_lifting_and_handling_equipment_branch',
      parentId: 'manufacture_of_lifting_and_handling_equipment_class',
    },
    {
      label:
        "i18n('manufacture_of_office_machinery_and_equipment_(except_computers_and_peripheral_equipment)_branch')",
      id:
        'manufacture_of_office_machinery_and_equipment_(except_computers_and_peripheral_equipment)_branch',
      parentId:
        'manufacture_of_office_machinery_and_equipment_except_computers_and_peripheral_equipment_class',
    },
    {
      label: "i18n('manufacture_of_power_driven_hand_tools_branch')",
      id: 'manufacture_of_power_driven_hand_tools_branch',
      parentId: 'manufacture_of_power_driven_hand_tools_class',
    },
    {
      label:
        "i18n('manufacture_of_filtering_machinery_for_liquids_and_gases_branch')",
      id: 'manufacture_of_filtering_machinery_for_liquids_and_gases_branch',
      parentId: 'manufacture_of_other_general_purpose_machinery_class',
    },
    {
      label: "i18n('manufacture_of_air_conditioning_machines_branch')",
      id: 'manufacture_of_air_conditioning_machines_branch',
      parentId: 'manufacture_of_other_general_purpose_machinery_class',
    },
    {
      label: "i18n('manufacture_of_other_general_purpose_machinery_branch')",
      id: 'manufacture_of_other_general_purpose_machinery_branch',
      parentId: 'manufacture_of_other_general_purpose_machinery_class',
    },
    {
      label:
        "i18n('manufacture_of_agricultural_and_forestry_machinery_branch')",
      id: 'manufacture_of_agricultural_and_forestry_machinery_branch',
      parentId: 'manufacture_of_agricultural_and_forestry_machinery_class',
    },
    {
      label:
        "i18n('manufacture_of_metal_forming_machinery_and_machine_tools_branch')",
      id: 'manufacture_of_metal_forming_machinery_and_machine_tools_branch',
      parentId:
        'manufacture_of_metal_forming_machinery_and_machine_tools_class',
    },
    {
      label: "i18n('manufacture_of_machinery_for_metallurgy_branch')",
      id: 'manufacture_of_machinery_for_metallurgy_branch',
      parentId: 'manufacture_of_machinery_for_metallurgy_class',
    },
    {
      label:
        "i18n('manufacture_of_machinery_for_mining_quarrying_and_construction_branch')",
      id:
        'manufacture_of_machinery_for_mining_quarrying_and_construction_branch',
      parentId:
        'manufacture_of_machinery_for_mining_quarrying_and_construction_class',
    },
    {
      label:
        "i18n('manufacture_of_machinery_for_food_beverage_and_processing_branch')",
      id: 'manufacture_of_machinery_for_food_beverage_and_processing_branch',
      parentId:
        'manufacture_of_machinery_for_food_beverage_and_tobacco_processing_class',
    },
    {
      label: "i18n('tobacco_processing_machinery_manufacturing_branch')",
      id: 'tobacco_processing_machinery_manufacturing_branch',
      parentId:
        'manufacture_of_machinery_for_food_beverage_and_tobacco_processing_class',
    },
    {
      label:
        "i18n('manufacture_of_machinery_for_textile_apparel_and_leather_production_branch')",
      id:
        'manufacture_of_machinery_for_textile_apparel_and_leather_production_branch',
      parentId:
        'manufacture_of_machinery_for_textile_apparel_and_leather_production_class',
    },
    {
      label: "i18n('manufacture_of_other_special_purpose_machinery_branch')",
      id: 'manufacture_of_other_special_purpose_machinery_branch',
      parentId: 'manufacture_of_other_special_purpose_machinery_class',
    },
    {
      label: "i18n('manufacture_of_motor_vehicles_branch')",
      id: 'manufacture_of_motor_vehicles_branch',
      parentId: 'manufacture_of_motor_vehicles_class',
    },
    {
      label: "i18n('manufacture_of_trailers_and_semi_trailers_branch')",
      id: 'manufacture_of_trailers_and_semi_trailers_branch',
      parentId:
        'manufacture_of_bodies_coachwork_for_motor_vehicles_manufacture_of_trailers_and_semi_trailers_class',
    },
    {
      label:
        "i18n('manufacture_of_bodies_(coachwork)_for_motor_vehicles_branch')",
      id: 'manufacture_of_bodies_(coachwork)_for_motor_vehicles_branch',
      parentId:
        'manufacture_of_bodies_coachwork_for_motor_vehicles_manufacture_of_trailers_and_semi_trailers_class',
    },
    {
      label:
        "i18n('manufacture_of_parts_and_accessories_for_motor_vehicles_branch')",
      id: 'manufacture_of_parts_and_accessories_for_motor_vehicles_branch',
      parentId:
        'manufacture_of_office_machinery_and_equipment_(except_computers_and_peripheral_equipmentmanufacture_of_parts_and_accessories_for_motor_vehicles_class',
    },
    {
      label: "i18n('manufacture_of_filters_branch')",
      id: 'manufacture_of_filters_branch',
      parentId:
        'manufacture_of_office_machinery_and_equipment_(except_computers_and_peripheral_equipmentmanufacture_of_parts_and_accessories_for_motor_vehicles_class',
    },
    {
      label: "i18n('building_of_ships_branch')",
      id: 'building_of_ships_branch',
      parentId: 'building_of_ships_and_floating_structures_class',
    },
    {
      label: "i18n('building_of_floating_structures_branch')",
      id: 'building_of_floating_structures_branch',
      parentId: 'building_of_ships_and_floating_structures_class',
    },
    {
      label: "i18n('building_of_pleasure_and_sporting_boats_branch')",
      id: 'building_of_pleasure_and_sporting_boats_branch',
      parentId: 'building_of_pleasure_and_sporting_boats_class',
    },
    {
      label:
        "i18n('manufacture_of_railway_locomotives_and_rolling_stock_branch')",
      id: 'manufacture_of_railway_locomotives_and_rolling_stock_branch',
      parentId: 'manufacture_of_railway_locomotives_and_rolling_stock_class',
    },
    {
      label:
        "i18n('manufacture_of_air_and_spacecraft_and_related_machinery_branch')",
      id: 'manufacture_of_air_and_spacecraft_and_related_machinery_branch',
      parentId: 'manufacture_of_air_and_spacecraft_and_related_machinery_class',
    },
    {
      label: "i18n('manufacture_of_military_fighting_vehicles_branch')",
      id: 'manufacture_of_military_fighting_vehicles_branch',
      parentId: 'manufacture_of_military_fighting_vehicles_class',
    },
    {
      label: "i18n('manufacture_of_motorcycles_branch')",
      id: 'manufacture_of_motorcycles_branch',
      parentId: 'manufacture_of_motorcycles_class',
    },
    {
      label: "i18n('manufacture_of_bicycles_and_invalid_carriages_branch')",
      id: 'manufacture_of_bicycles_and_invalid_carriages_branch',
      parentId: 'manufacture_of_bicycles_and_invalid_carriages_class',
    },
    {
      label: "i18n('manufacture_of_other_transport_equipment_nec_branch')",
      id: 'manufacture_of_other_transport_equipment_nec_branch',
      parentId: 'manufacture_of_other_transport_equipment_nec_class',
    },
    {
      label: "i18n('manufacture_of_furniture_branch')",
      id: 'manufacture_of_furniture_branch',
      parentId: 'manufacture_of_furniture_class',
    },
    {
      label: "i18n('manufacture_of_jewellery_and_related_articles_branch')",
      id: 'manufacture_of_jewellery_and_related_articles_branch',
      parentId: 'manufacture_of_jewellery_and_related_articles_class',
    },
    {
      label:
        "i18n('manufacture_of_imitation_jewellery_and_related_articles_branch')",
      id: 'manufacture_of_imitation_jewellery_and_related_articles_branch',
      parentId: 'manufacture_of_imitation_jewellery_and_related_articles_class',
    },
    {
      label: "i18n('manufacture_of_musical_instruments_branch')",
      id: 'manufacture_of_musical_instruments_branch',
      parentId: 'manufacture_of_musical_instruments_class',
    },
    {
      label: "i18n('manufacture_of_sports_goods_branch')",
      id: 'manufacture_of_sports_goods_branch',
      parentId: 'manufacture_of_sports_goods_class',
    },
    {
      label: "i18n('manufacture_of_games_and_toys_branch')",
      id: 'manufacture_of_games_and_toys_branch',
      parentId: 'manufacture_of_games_and_toys_class',
    },
    {
      label:
        "i18n('manufacture_of_medical_and_dental_instruments_and_supplies_branch')",
      id: 'manufacture_of_medical_and_dental_instruments_and_supplies_branch',
      parentId:
        'manufacture_of_bodies_(coachwork)manufacture_of_medical_and_dental_instruments_and_supplies_class',
    },
    {
      label: "i18n('other_manufacturing_nec_branch')",
      id: 'other_manufacturing_nec_branch',
      parentId: 'other_manufacturing_nec_class',
    },
    {
      label: "i18n('wholesale_on_a_fee_or_contract_basis_branch')",
      id: 'wholesale_on_a_fee_or_contract_basis_branch',
      parentId: 'wholesale_on_a_fee_or_contract_basis_class',
    },
    {
      label:
        "i18n('electric_power_generation_transmission_and_distribution_branch')",
      id: 'electric_power_generation_transmission_and_distribution_branch',
      parentId: 'electric_power_generation_transmission_and_distribution_class',
    },
    {
      label: "i18n('steam_and_air_conditioning_supply_branch')",
      id: 'steam_and_air_conditioning_supply_branch',
      parentId: 'steam_and_air_conditioning_supply_class',
    },
    {
      label: "i18n('water_collection_treatment_and_supply_branch')",
      id: 'water_collection_treatment_and_supply_branch',
      parentId: 'water_collection_treatment_and_supply_class',
    },
    {
      label: "i18n('treatment_and_disposal_of_non_hazardous_waste_branch')",
      id: 'treatment_and_disposal_of_non_hazardous_waste_branch',
      parentId: 'treatment_and_disposal_of_non_hazardous_waste_class',
    },
    {
      label: "i18n('recycling_of_meta_waste_and_scrap_branch')",
      id: 'recycling_of_meta_waste_and_scrap_branch',
      parentId: 'materials_recovery_class',
    },
    {
      label: "i18n('recycling_of_non_metal_waste_and_scrap_branch')",
      id: 'recycling_of_non_metal_waste_and_scrap_branch',
      parentId: 'materials_recovery_class',
    },
    {
      label:
        "i18n('research_and_experimental_development_on_natural_sciences_and_engineering_branch')",
      id:
        'research_and_experimental_development_on_natural_sciences_and_engineering_branch',
      parentId:
        'research_and_experimental_development_on_natural_sciences_and_engineering_class',
    },
  ].filter(
    (obj: any) =>
      parentId === 'All' ||
      obj.parentId === parentId ||
      obj.parentId === 'mandatory'
  );
};

export { getCategories, getDivisions, getGroups, getClasses, getBranches };
