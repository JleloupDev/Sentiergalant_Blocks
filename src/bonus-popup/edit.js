/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-block-editor/#useBlockProps
 */
import { useBlockProps } from '@wordpress/block-editor';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#edit
 *
 * @return {WPElement} Element to render.
 */
// export default function Edit() {
// 	return (
// 		<p {...useBlockProps()}>
// 			{__('Sg Blocks – hello from the editor!', 'sg-blocks')}
// 		</p>
// 	);
// }

export default function Edit() {
	return (
		<div class="sg_bonus_popup_btn">
			<h3>Découvrez notre vision de l'élégance</h3>
			<a class="sg_btn button" id="open_popup">Notre guide des chemins du gentleman !</a>

			<div id="bonus_popup" class="overlay dnone">
				<div class="popup">
					<a id="close_popup" class="close_popup" href="#">&times;</a>
					<div class="content">
						<div id="sg-form-header">
							<h3><p>Découvrez notre <span>Guide du Gentleman</span></p></h3>
						</div>

						<div>
							<p>
								Nous n'envoyons <strong>pas de newsletter</strong>, nous ne <strong>commerçons pas avec vos données</strong> et nous ne vous enverrons <strong>pas d'e-mails réguliers</strong>
								<br/>
								Nous souhaitons simplement pouvoir vous prévenir en cas de nouveautée majeure impactant notre communautée (vous !).
							</p>
						</div>

						<form  method="post" action="//sg-autorepondeur.com/public/subscribe.php" id="sg-form-body" target="_top" accept-charset="UTF-8">
								<div class="input_group">
									<label for="email">Email</label>
									<input type="email" class="form-control" name="email" placeholder="Email" required="true"/>
								</div>

								<div class="input_group">
									<label for="forename">Prénom</label>
									<input type="text" class="form-control" name="forename" placeholder="Prénom"/>
								</div>
							
								<div>
									<img src="https://sg-autorepondeur.com/tauxouverture/form.gif?membreid=45114&amp;listeid=189697&amp;id=68287" alt="" width="1" height="1" style="display: none"/>
									<input type="hidden" name="user" value="45114"/>
									<input type="hidden" name="list" value="189697"/>
									<input type="hidden" name="form" value="68287"/>
								</div>

								<div class="sg_btn_container input_group">
									<button type="submit" class="sg_btn">Recevoir le Guide</button>
								</div>
						</form>

						<div id="sg-form-footer" style="text-align: center">
							<p>Pour conna&icirc;tre et exercer mes droits, notamment pour annuler mon consentement, je consulte la politique de vie priv&eacute;e en cliquant <a href="https://sentiergalant.com/politique-de-confidentialite-2/">ici</a></p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

// export default function Edit(props) {
// 	const blockProps = useBlockProps();

// 	// La fonction qui met à jour la valeur
// 	const onChangeContent = event => {
// 		props.setAttributes( { content: event.target.value } )
// 	}

// 	return (
// 		<div {...blockProps}>
// 			{ props.isSelected ? ( // N'afficher le champ seulement si le bloc est actif
// 				<input
// 					type='text'
// 					value={ props.attributes.content }
// 					onChange={ onChangeContent }
// 					placeholder={ __('Write a text!', 'capitainewp-gut-bases' ) }
// 				/>
// 			) : (
// 				<p className="content">{ props.attributes.content }</p>
// 			) }
// 		</div>
// 	)
// }
