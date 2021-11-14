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
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#save
 *
 * @return {WPElement} Element to render.
 */
export default function save(props) {
	return (
	<div class="popup">
		<div class="content">
				<div id="sg-form-header">
					<h3><p>Découvrez notre <span>Guide du Gentleman</span></p></h3>
				</div>

				<div>
					<p>
						Nous n'envoyons <strong>pas de newsletter</strong>, nous ne <strong>commerçons pas avec vos données</strong> et nous ne vous enverrons <strong>pas d'e-mails réguliers</strong>
					</p>
					<br/>
					<p>
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
	);
}
